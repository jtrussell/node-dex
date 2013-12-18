'use strict';

var blessed = require('blessed');

module.exports = function(screen, opts) {
  var style = opts.style
    , layout = opts.layout;

  return blessed.box({
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
    border: {
      type: 'line'
    },
    style: style
  });
};
