'use strict';

var blessed = require('blessed');

/**
 * Factory for help bar widgets
 *
 * @param {Blessed.Screen} screen The top level blessed screen
 * @param {Blessed.Element} parent Parent container
 * @param {Object} opts Style and layout options
 * @return {Blessed.Text}
 */
module.exports = function(screen, parent, opts) {
  var layout = opts.layout;

  return blessed.box({
    parent: parent,
    content: [
      '<Esc>: Quit',
      '/: Search',
      '?: Show Help'
    ].join('   '),
    align: 'right',
    bottom: 0,
    right: 0,
    width: screen.width - layout.navWidth,
    height: layout.helpHeight,
    style: opts.style,
    border: opts.border
  });
};
