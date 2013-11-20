node-dex
========

A command line tool for managing passwords built on nodejs

# Usage

## CLI (TUI)

```shell
dex <dex-pw-file>
******** <-- Password
```

## API

```javascript
var Dex = require('dex')
  , dex = new Dex('dex-file', 'password');
// ...
```
