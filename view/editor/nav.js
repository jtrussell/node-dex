'use strict';

var blessed = require('blessed');

module.exports = function(screen, opts) {
  var style = opts.style
    , layout = opts.layout;

  return blessed.list({
    top: 0,
    left: 0,
    parent: screen,
    keys: true,
    vi: true,
    width: layout.navWidth,
    height: screen.height,
    selectedFg: style.bg,
    selectedBg: style.fg,
    itemFg: style.fg,
    itemBg: style.bg,
    style: style,
    border: opts.border
  });
};
