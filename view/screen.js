'use strict';

var blessed = require('blessed');

var screen = /^win/.test(process.platform) ?
  blessed.screen({term: 'windows-ansi'}) :
  blessed.screen();

var style = {
  fg: 'white',
  bg: 'black',
  border: {
    type: 'line',
    fg: 'white'
  }
};

var layout = {
  navWidth: 40,
  helpHeight: 3,
  breadcrumbsHeight: 3
};

var opts = {
  style: style,
  layout: layout
};

// -----------------------------------------------------
// Dummy data
var items = [{
  label: 'New Document 1',
  username: '',
  password: '',
  url: '',
  notes: ''
},{
  label: 'New Document 2',
  username: '',
  password: '',
  url: '',
  notes: ''
},{
  label: 'New Document 3',
  username: '',
  password: '',
  url: '',
  notes: ''
}];
// -----------------------------------------------------

var editor = require('./editor')(screen, items, opts);

screen.key(['escape'], function(ch, key) {
  return process.exit(0);
});

screen.append(editor);
editor.focus();
screen.render();
