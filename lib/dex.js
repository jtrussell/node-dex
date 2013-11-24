'use strict';

var pkg = require('../package.json');

module.exports.Dex = function() {
  var self = this;
  
  var fs = require('fs')
    , crypto = require('crypto')
    , algorithm = 'aes192';
  
  var file
    , password;

  var config = {
    version: pkg.version,
    things: {}
  };
  
  self.open = function(f, pw) {
    file = f;
    password = pw;

    var fConfig = '';
    
    var decipher= crypto.createDecipher(algorithm, password)
      , dexFileStream = fs.createReadStream(f);
    dexFileStream.pipe(decipher);
      
    decipher.on('data', function(chunk) {
      fConfig += chunk;
    });
    
    decipher.on('end', function() {
      console.log(fConfig);
    });
  };
  
  self.save = function() {
    var cipher = crypto.createCipher(algorithm, password)
      , dexFileStream = fs.createWriteStream(file);
    cipher.pipe(dexFileStream);
    cipher.write(JSON.stringify(config));
    cipher.end();
  };
  
  self.get = function(path) {
    // ...
  };
  
  self.set = function(path, value) {
    return self;
  };
  
  self._setConfig = function(obj) {
    config = obj;
    return self;
  };
  
  self._getConfig = function() {
    return config;
  };
  
  self._setFile = function(f) {
    file = f;
  };
  
  self._setPassword = function(p) {
    password = p;
  };
};
