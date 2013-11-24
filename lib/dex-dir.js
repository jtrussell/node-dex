'use strict';

var defaults = {
  label: 'New Folder',
  children: []
};

var Dir = function(parent, opts) {
  opts = opts || {};
  var self = this;

  self.parent = parent;

  self.label = opts.label || defaults.label;
  self.children = opts.children || defaults.children;

  self.addChild = function(item) {
    if(self.hasAncestor(item)) {
      // no recursive structures
      return false;
    }

    item.parent = self;
    self.children.push(item);
    return true;
  };

  self.hasAncestor = function(dir) {
    /*code*/
  };
};

Dir.prototype = require('./dex-item.js').Item.prototype;

module.exports.Dir = Dir;
