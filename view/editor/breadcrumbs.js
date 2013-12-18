'use strict';

var blessed = require('blessed');

module.exports = function(screen, opts) {
  var layout = opts.layout;

  return blessed.text({
    content: '{right}foo > bar > blargus Title{/right}',
    tags: true,
    top: 0,
    right: 0,
    width: screen.width - layout.navWidth,
    height: layout.breadcrumbsHeight,
    style: opts.style,
    border: opts.border
  });
};
