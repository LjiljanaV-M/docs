var moment = require('moment');

module.exports = function() {
  var markup = [
    '<div class="content-recent-author">', this.author ? this.author + ', ' : '',
    moment(this.stats.mtime).format('MMMM Do YYYY'), ' • ',
    ' See <a href="https://github.com/akerkits">GitHub</a>',
    ' for source files</div>'
  ].join('');


  return markup;
};
