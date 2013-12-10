'use strict';

var blessed = require('blessed')
  , screen = blessed.screen({term: 'windows-ansi'});

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
  width: navWidth,
  height: screen.height,
  selectedFg: selectedFg,
  selectedBg: selectedBg,
  itemFg: style.fg,
  itemBg: style.bg,
  border: {
    type: 'line'
  },
  style: style
});

var breadcrumbs = blessed.text({
  content: 'foo > bar > blargus {right}Title{/right}',
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

var contentDetails = blessed.box({
  content: 'my stuff',
  align: 'left',
  top: breadcrumbsHeight,
  right: 0,
  width: screen.width - navWidth,
  height: screen.height - (breadcrumbsHeight + helpHeight),
  border: {
    type: 'line'
  },
  style: style
});

var helpBar = blessed.text({
  content: [
    '<Esc>: Quit',
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

screen.append(navList);
screen.append(breadcrumbs);
screen.append(contentDetails);
screen.append(helpBar);

screen.key(['escape', 'q'], function(ch, key) {
  return process.exit(0);
});

screen.render();
