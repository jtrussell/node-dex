'use strict';

var blessed = require('blessed');

/**
 * Factory for input form widgets
 *
 * @param {Blessed.Screen} screen The top level blessed screen
 * @param {Blessed.Element} parent Parent container
 * @param {Object} opts Style and layout options
 * @return {Blessed.Form}
 */
module.exports = function(screen, parent, opts) {
  var layout = opts.layout;

  var form = blessed.form({
    parent: parent,
    top: layout.breadcrumbsHeight,
    right: 0,
    padding: 1,
    width: screen.width - layout.navWidth,
    height: screen.height - (layout.breadcrumbsHeight + layout.helpHeight),
    style: opts.style,
    border: opts.border
  });

  var inputLabel = blessed.textarea({
    parent: form,
    inputOnFocus: true
  });

  /**
   * Set the form input values
   *
   * Input object should have properties for:
   *
   * - label
   *
   * Returns a self reference for chaining.
   *
   * @param {Object} args The value object
   * @return {Blessed.Form}
   */
  form.dexSetValue = function(args) {
    inputLabel.setValue(args.label);
    return this;
  };

 return form;
};
