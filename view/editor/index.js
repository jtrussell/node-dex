'use strict';

var _ = require('lodash')
  , blessed = require('blessed');

var navFactory = require('./nav')
  , breadcrumbsFactory = require('./breadcrumbs')
  , formFactory = require('./form')
  , helpFactory = require('./help');

/**
 * Factory for help bar widgets
 *
 * @param {Blessed.Screen} screen The top level blessed screen
 * @param {Blessed.Element} parent Parent container
 * @param {Array<Object>} items Array of items to work with
 * @param {Object} opts Style and layout options
 * @return {Blessed.Text}
 */
module.exports = function(screen, items, opts) {

  var itemLabels = _.pluck(items, 'label');

  var editor = blessed.box({
    top: 0, right: 0, bottom: 0, left: 0,
    parent: screen
  });

  var nav = navFactory(screen, editor, itemLabels, opts)
    , breadcrumbs = breadcrumbsFactory(screen, editor, opts)
    , form = formFactory(screen, editor, opts)
    , help = helpFactory(screen, editor, opts);

  editor.append(nav);
  editor.append(breadcrumbs);
  editor.append(form);
  editor.append(help);

  nav.key(['o', 'enter'], function() {
    var selectedItem = items[nav.selected];
    form.dexSetValue(selectedItem);
    screen.focusPush(form);
    screen.render();
  });

  screen.focusPush(nav);

  editor.on('focus', function() {
    nav.focus();
  });

  screen.key(['C-c'], function(ch, key) {
    if(screen.focused !== nav) {
      var focusEl = screen.focusPop();
    }
  });

  return editor;
};
