'use strict';

/**
 * Factory for nav list widgets
 *
 * @todo Make dexSetItems and remove from construct?
 * @param {Blessed.Screen} screen The top level blessed screen
 * @param {Blessed.Element} parent Parent container
 * @param {Array<String>} items Array of items to display
 * @param {Object} opts Style and layout options
 * @return {Blessed.Text}
 */
var blessed = require('blessed');

module.exports = function(screen, parent, items, opts) {
  var style = opts.style
    , layout = opts.layout;

  return blessed.list({
    parent: parent,
    top: 0,
    left: 0,
    keys: true,
    vi: true,
    width: layout.navWidth,
    height: screen.height,
    selectedFg: style.bg,
    selectedBg: style.fg,
    itemFg: style.fg,
    itemBg: style.bg,
    items: items,
    style: style,
    border: opts.border
  });
};
