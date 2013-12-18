'use strict';

var blessed = require('blessed');

/**
 * Factory for breadcrumbs widgets
 *
 * @param {Blessed.Screen} screen The top level blessed screen
 * @param {Blessed.Element} parent Parent container
 * @param {Object} opts Style and layout options
 * @return {Blessed.Text}
 */
module.exports = function(screen, parent, opts) {
  var layout = opts.layout;

  return blessed.text({
    parent: parent,
    content: 'foo > bar > blargus > wowza',
    tags: true,
    top: 0,
    right: 0,
    width: screen.width - layout.navWidth,
    height: layout.breadcrumbsHeight,
    style: opts.style,
    border: opts.border
  });
};
