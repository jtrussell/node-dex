'use strict';

var _ = require('lodash')
  , blessed = require('blessed');

var screen = /^win/.test(process.platform) ?
  blessed.screen({term: 'windows-ansi'}) :
  blessed.screen();

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

var navWidth = 40
  , helpHeight = 3
  , breadcrumbsHeight = helpHeight
  , selectedFg = 'black'
  , selectedBg = 'white'
  , style = {
      fg: 'white',
      bg: 'black',
      border: {
        fg: '#ffffff'
      }
    };

var panel = blessed.box({
  top: 'center',
  left: 'center',
  width: screen.width,
  height: screen.height,
  content: 'Hello world',
  border: {
    type: 'line'
  },
  style: style
});

var navList = blessed.list({
  top: 0,
  left: 0,
  parent: screen,
  keys: true,
  vi: true,
  width: navWidth,
  height: screen.height,
  selectedFg: selectedFg,
  selectedBg: selectedBg,
  itemFg: style.fg,
  itemBg: style.bg,
  items: _.pluck(items, 'label'),
  border: {
    type: 'line'
  },
  style: style
});

var breadcrumbs = blessed.text({
  content: '{right}foo > bar > blargus Title{/right}',
  tags: true,
  top: 0,
  right: 0,
  width: screen.width - navWidth,
  height: breadcrumbsHeight,
  border: {
    type: 'line'
  },
  style: style
});

var contentDetails = blessed.form({
  top: breadcrumbsHeight,
  right: 0,
  padding: 1,
  width: screen.width - navWidth,
  height: screen.height - (breadcrumbsHeight + helpHeight),
  border: {
    type: 'line'
  },
  style: style
});

var inputLabel = blessed.textarea({
  parent: contentDetails,
  inputOnFocus: true
});

var helpBar = blessed.text({
  content: [
    '<Esc>: Quit',
    '/: Search',
    '?: Show Help'
  ].join('   '),
  align: 'right',
  bottom: 0,
  right: 0,
  width: screen.width - navWidth,
  height: helpHeight,
  border: {
    type: 'line'
  },
  style: style
});

// Don't need this?
//contentDetails.append(inputLabel);

screen.append(navList);
screen.append(breadcrumbs);
screen.append(contentDetails);
screen.append(helpBar);

screen.key(['escape'], function(ch, key) {
  return process.exit(0);
});

screen.key(['C-c'], function(ch, key) {
  if(screen.focused !== navList) {
    var focusEl = screen.focusPop();
  }
});

navList.key(['o', 'enter'], function() {
  contentDetails.setContent();
  var selectedItem = items[navList.selected];
  inputLabel.setValue(selectedItem.label);
  screen.focusPush(contentDetails);
  screen.render();
});

screen.focusPush(navList);

screen.render();
