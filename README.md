## AKER Documentation
![Build status](https://api.travis-ci.org/AKERKits/docs.svg?branch=master)

To view this documentation, visit [our website](http://docs.akerkits.com), where the documentation is hosted.

### Quickstart
(Windows Only)
 - Right-click on Git Bash, select "Run as Administrator"
 - In the docs directory: ''npm install --global --production windows-build-tools''

(All Platforms)
 - In the docs directory, pull latest: ``git checkout master && git pull``
 - Download dependencies: ``npm install``
 - Launch local server: ``npm start``
 - "Git add." or "Git add -u"
 - "Git commit -m (message)"
 - Once everything looks good, push back up to the master branch: ``git push``

### Installation

To host this documentation locally, you'll need Node.js and npm

Once you have Node.js set up, navigate to this repository's directory on your machine, and then:

    npm install

to install any other necessary dependencies.

### Hosting locally

This documentation uses a fabulous tool from the folks at Segment called [Metalsmith](http://www.metalsmith.io). Metalsmith is a static site generator that builds static HTML sites from source material in other formats; in this case, Markdown and Handlebars.

To run a locally hosted version of the documentation, follow the installation instructions above, and then within the 'docs' directory type in your terminal:

`npm start`

This will set up a server running at `http://localhost:8080`. If you make changes to the source content, your browser should automatically refresh using `livereload`.

### Testing

To run the tests locally, run `npm test` from the root of the
repository. This will tell you whether the build will pass on Travis or
not.

### Deployment

The production server listens for a webhook from Github when a push is made to master.
Upon receiving one, the build step is run. The script `scripts/hook.js` listens for the
webhook. Run it with a daemonizer like [pm2](https://github.com/Unitech/pm2) or [forever](https://github.com/foreverjs/forever).

### Organization

If you create a new file under the `shared`, please add `shared: true`
to the front-matter at the beginning of the MD file so that the link to
edit the file on GitHub will be correct. For instance:

```
---
word: API
title: Cloud code (API)
order: 4
shared: true
---
```

### Structuring your content

The docs dynamically generate a table of contents for navigation purposes based on the headers (i.e. `###`) that you use on each page. It is important to note that _order and heirarchy matters_ when you are designing the organization of content on your page. Your page should include the following:

* 1 `h1` at the top of the page that will serve as the title of the page. You can even copy the `title` directly from the front-matter of the markdown file like this: `# {{title}}`

* As many `h2`s (`##`) as you'd like to serve as the section headers for the page.

* Underneath every `h2`, if applicable, as many `h3`s (`###`) as you'd like to serve as sub-sections within the section. These will appear as nested within the navigation on the left.

Note that there are only 2 levels of navigation that will appear in the table of contents. *`h4`s and below will not appear in the table of contents*.

### Tests

To run the test scripts, run `npm test`.

### Attributions

This documentation is a fork of [Particle's documentation](https://github.com/spark/docs)

### Contributions

This documentation is managed by AKER, but supported by the community. We welcome contributions such as:

* Edits to improve grammar or fix typos
* Edits to improve clarity
* Additional annotated examples for others to follow
* Additional content that would help provide a complete understanding of the Aker platform
* Translations to other languages

Making a contribution is as simple as forking this repository, making edits to your fork, and contributing those edits as a pull request. For more information on how to make a pull request, see [Github's documentation](https://help.github.com/articles/using-pull-requests/).

### License

These files have been made available online through a [Creative Commons Attribution-ShareAlike 3.0 license](http://creativecommons.org/licenses/by-sa/3.0/us/).

You are welcome to distribute, remix, and use these files for commercial purposes. If you do so, please attribute the original design to Particle both on the website and on the physical packaging of the product or in the instruction manual. All derivative works must be published under the same or a similar license.
