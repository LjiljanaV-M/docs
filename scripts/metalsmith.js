'use strict';

var Metalsmith = require('metalsmith');
var markdown = require('metalsmith-markdown');
var templates = require('metalsmith-templates');
var serve = require('metalsmith-serve');
var moveUp = require('metalsmith-move-up');
var less = require('metalsmith-less');
var ignore = require('metalsmith-ignore');
var permalinks = require('metalsmith-permalinks');
var collections = require('metalsmith-collections');
var cleanCSS = require('metalsmith-clean-css');
var compress = require('metalsmith-gzip');
var paths = require('metalsmith-paths');
var partials = require('metalsmith-register-partials');
var helpers = require('metalsmith-register-helpers');
var redirect = require('metalsmith-redirect');
var copy = require('metalsmith-copy');
var fork = require('./fork');
var inPlace = require('metalsmith-in-place');
var watch = require('metalsmith-watch');
var autotoc = require('metalsmith-autotoc');
var fileMetadata = require('metalsmith-filemetadata');
var msIf = require('metalsmith-if');
var precompile = require('./precompile');
var apidoc = require('./apidoc');
var git = require('git-rev');

var handlebars = require('handlebars');
var prettify = require('prettify');
prettify.register(handlebars);

//disable autolinking
function noop() {}
noop.exec = noop;
var marked = require('marked');
marked.InlineLexer.rules.gfm.url = noop;

var environment;

var gitBranch;

exports.metalsmith = function() {
  function removeEmptyTokens(token) {
    if (token.length > 0) {
      return token;
    }
  };
  var metalsmith = Metalsmith(__dirname)
    .concurrency(100)
    .source('../src')
    .destination('../build')
    .use(less({
      pattern: '**/less/style.less',
      useDynamicSourceMap: true
    }))
    .use(ignore([
      '**/less/*.less',
      'content/languages/**/*',
      'assets/images/**/*.ai',
      'content/reference/api_old.md'
    ]))
    .use(cleanCSS({
      files: '**/*.css'
    }))
    .use(msIf(
      (!process.env.TRAVIS_PULL_REQUEST || process.env.TRAVIS_PULL_REQUEST === 'false'),
      apidoc({
        src: '../api-node/',
        config: '../api-node/',
        destFile: 'content/reference/api.md',
        includeFilters: ['.*[vV]iews[^.]*\\.js$', 'lib/AccessTokenController.js']
      })
    ))
    .use(partials({
      directory: '../templates/partials'
    }))
    .use(fileMetadata([
      {pattern: 'content/**/*.md', metadata: {'assets': '/assets', 'branch': gitBranch}}
    ]))
    .use(msIf(
      environment === 'development',
      fileMetadata([
        {pattern: 'content/**/*.md', metadata: {'development': true}}
      ])
    ))
    .use(precompile({
      directory: '../templates/precompile',
      dest: 'assets/js/precompiled.js',
      knownHelpers: {
        'each': true,
        'if': true
      }
    }))
    .use(moveUp(['content/**/*']))
    .use(paths())
    .use(helpers({
      directory: '../templates/helpers'
    }))
    .use(collections({
      guide: {
        pattern: 'guide/:section/*.md',
        sortBy: 'order',
        orderDynamicCollections: [
          'getting-started',
          'tools-and-features',
          'how-to-build-a-product'
        ]
      },
      reference: {
        pattern: 'reference/*md',
        sortBy: 'order'
      },
			tutorials: {
				pattern: 'tutorials/:section/*.md',
				sortBy: 'order',
				orderDynamicCollections: [
					'topics',
					'projects',
					'curriculum'
				]
			},
      assemblyManuals: {
        pattern: 'assembly-manuals/*.md',
        sortBy: 'order'
      },
      userManuals: {
        pattern: 'user-manuals/*.md',
        sortBy: 'order'
      },
      businessDocs: {
        pattern: 'open-business-model/:section/*.md',
        sortBy: 'order'
      },
      beeDocs: {
        pattern: 'open-source-beehives/:section/*.md',
        sortBy: 'order'
      },
      support: {
        pattern: 'support/:section/*.md',
        sortBy: 'order',
        orderDynamicCollections: [
          'support-and-fulfillment',
          'troubleshooting',
          'inquiries'
        ]
      }
    }))//end of collections/sections
    .use(copy({
      pattern: '**/*.jade',
      extension: '.html',
      move: true
    }))
    .use(inPlace({
      engine: 'handlebars',
      pattern: '**/*.md'
    }))
    .use(markdown())
    .use(autotoc({
      selector: 'h2, h3',
      pattern: '**/**/*.md'
    }))
    .use(templates({
      engine: 'handlebars',
      directory: '../templates'
    }))
    .use(permalinks({
      relative: false
    }));

  return metalsmith;
};

exports.compress = function(callback) {
  Metalsmith(__dirname)
    .clean(false)
    .concurrency(100)
    .source('../build')
    .destination('../build')
    .build(callback);
};

exports.build = function(callback) {
  git.branch(function (str) {
    gitBranch = process.env.TRAVIS_BRANCH || str;
    exports.metalsmith()
      .build(function(err, files) {
        if (err) {
          throw err;
        }
        if (callback) {
          callback(err, files);
        }
      });
  });
};

exports.test = function(callback) {
  var server = serve({ cache: 300 });
  git.branch(function (str) {
    gitBranch = process.env.TRAVIS_BRANCH || str;
    exports.metalsmith()
      .use(server)
      .build(function(err, files) {
        if (err) {
          console.error(err, err.stack);
        }
        if (callback) {
          callback(err, files);
        }
      });
  });
  return server;
};

exports.server = function(callback) {
  environment = 'development';
  git.branch(function (str) {
    gitBranch = process.env.TRAVIS_BRANCH || str;
    exports.metalsmith().use(serve())
      .use(watch({
        paths: {
          '${source}/content/**/*.md': true,
          '${source}/assets/less/*.less': 'assets/less/*.less',
          '../templates/reference.hbs': 'content/reference/*.md',
          '../templates/guide.hbs': 'content/guide/**/*.md',
          '../templates/datasheet.hbs': 'content/datasheets/*.md',
          '../templates/support.hbs': 'content/support/**/*.md',
          '../templates/suppMenu.hbs': 'content/support/**/*.md',
          '${source}/assets/js/*.js' : true
        },
        livereload: true
      }))
      .build(function(err, files) {
        if (err) {
          console.error(err, err.stack);
        }
        if (callback) {
          callback(err, files);
        }
      });
  });
};
