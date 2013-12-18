'use strict';

var blessed = require('blessed');

module.exports = function(screen, opts) {
  var style = opts.style
    , layout = opts.layout;

  var contentDetails = blessed.form({
    top: layout.breadcrumbsHeight,
    right: 0,
    padding: 1,
    width: screen.width - layout.navWidth,
    height: screen.height - (layout.breadcrumbsHeight + layout.helpHeight),
    style: style
  });

  var inputLabel = blessed.textarea({
    parent: contentDetails,
    inputOnFocus: true
  });

 return contentDetails;
};
