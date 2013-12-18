'use strict';

var blessed = require('blessed');

module.exports = function(screen, opts) {
  var layout = opts.layout;

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
    style: opts.style,
    border: opts.border
  });
};
