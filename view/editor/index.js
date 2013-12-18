'use strict';

var _ = require('lodash')
  , blessed = require('blessed');

var navFactory = require('./nav')
  , breadcrumbsFactory = require('./breadcrumbs')
  , formFactory = require('./form')
  , helpFactory = require('./help');

module.exports = function(screen, items, opts) {
  var nav = navFactory(screen, opts)
    , breadcrumbs = breadcrumbsFactory(screen, opts)
    , form = formFactory(screen, opts)
    , help = helpFactory(screen, opts);

  var editor = blessed.box({
    top: 0, right: 0, bottom: 0, left: 0
  });
  editor.append(nav);
  editor.append(breadcrumbs);
  editor.append(form);
  editor.append(help);

  // ?
  //nav.items = _.pluck(items, 'label');

  nav.key(['o', 'enter'], function() {
    var selectedItem = items[nav.selected];
    //inputLabel.setValue(selectedItem.label);
    screen.focusPush(form);
    screen.render();
  });

  screen.focusPush(nav);

  screen.key(['C-c'], function(ch, key) {
    if(screen.focused !== nav) {
      var focusEl = screen.focusPop();
    }
  });

  return editor;
};
