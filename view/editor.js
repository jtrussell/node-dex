var blessed = require('blessed')
  , screen = blessed.screen();

var panel = blessed.box({
  top: 'center',
  left: 'center',
  width: '100%',
  height: '100%',
  content: 'Hello world',
  border: {
    type: 'line'
  },
  style: {
    fg: 'white',
    bg: 'black',
    border: {
      fg: '#ffffff'
    }
  }
});

var navList = blessed.box({
  // ...
});

screen.append(panel);

screen.render();
