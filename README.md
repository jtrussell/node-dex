node-dex
========

> A command line tool for managing passwords built on Node.js

**HEYO**

This is a work in progress, it should not yet be used with any sensitive info. Some day Dex will happily store your passwords for you... but that day has not yet come.

# Usage

## CLI (TUI)

```shell
dex <dex-pw-file>
******** <-- Password
```

### TUI Keys

Controls and shortcuts are meant to be reminiscent of Vim and the NerdTree
plugin :)

- `m` - Modify current entry/directory
  - `a` - Add entry/directory
  - `m` - Move current entry/directory
  - `d` - Delete current entry/directory
- `x`/`u` - Navigate up a directory
- `j` - Move down in entry/directory list
- `k` - Move up in entry/directory list 
- `o`/`<Enter>` - Open directory or edit entry
- `<Esc>`/`<Ctrl-c>` - Back to list, exit it at top
- `q` - quit
- `.` - More entry options
  - `s` - Set password
  - `c` - Copy password to clipboard
  - `v` - View password
  - `a` - Autogen password (opens prompt)
    - `y` - Confirm
    - `n`/`<Esc>` - Cancel
- `/` - Start search
- `?` - Show keyboard shortcuts help

## API

```javascript
var Dex = require('dex')
  , dex = new Dex('dex-file', 'password');
// ...
```
