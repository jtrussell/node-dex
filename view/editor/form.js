'use strict';

var blessed = require('blessed');

module.exports = function(screen, opts) {
  var layout = opts.layout;

  var contentDetails = blessed.form({
    top: layout.breadcrumbsHeight,
    right: 0,
    padding: 1,
    width: screen.width - layout.navWidth,
    height: screen.height - (layout.breadcrumbsHeight + layout.helpHeight),
    style: opts.style,
    border: opts.border
  });

  var inputLabel = blessed.textarea({
    parent: contentDetails,
    inputOnFocus: true
  });

 return contentDetails;
};
