'use strict';

var defaults = {
  label: 'New Document',
  username: '',
  password: '',
  url: '',
  notes: ''
};

var Doc = function(parent, opts) {
  opts = opts || {};
  var self = this;

  self.parent = parent;

  self.label = opts.label || defaults.label;
  self.username = opts.username || defaults.username;
  self.password = opts.password || defaults.password;
  self.url = opts.url || defaults.url;
  self.notes = opts.notes || defaults.notes;
};

Doc.prototype = require('./dex-item.js').Item.prototype;

module.exports.Doc = Doc;
