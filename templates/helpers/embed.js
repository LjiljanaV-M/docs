module.exports = function(id) {
  var markup = [
    '<div data-configid="', id, '" style="width:100%; height:340px;" class="issuuembed"></div>',
    '<script type="text/javascript" src="//e.issuu.com/embed.js" async="true"></script>',
  ].join('');

  return markup;
};
