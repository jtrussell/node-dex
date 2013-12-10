var blessed = require('blessed')
  , screen = blessed.screen();

var navWidth = 40
  , helpHeight = 5
  , breadcrumpbsHeight = helpHeight
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

var navList = blessed.box({
  top: 0,
  left: 0,
  width: navWidth,
  height: screen.height,
  border: {
    type: 'line'
  },
  style: style
});

var breadcrumpbs = blessed.box({
  content: 'foo > bar > blargus',
  align: 'left',
  top: 0,
  right: 0,
  width: screen.width - navWidth,
  height: breadcrumpbsHeight,
  border: {
    type: 'line'
  },
  style: style
});

var contentDetails = blessed.box({
  content: 'my stuff',
  align: 'left',
  top: breadcrumpbsHeight,
  right: 0,
  width: screen.width - navWidth,
  height: screen.height - (breadcrumpbsHeight + helpHeight),
  border: {
    type: 'line'
  },
  style: style
});

var helpBar = blessed.box({
  content: '?: Show Help',
  align: 'right',
  valign: 'bottom',
  bottom: 0,
  right: 0,
  width: screen.width - navWidth,
  height: helpHeight,
  border: {
    type: 'line'
  },
  style: style
});

//screen.append(panel);
screen.append(navList);
screen.append(breadcrumpbs);
screen.append(contentDetails);
screen.append(helpBar);

screen.render();
