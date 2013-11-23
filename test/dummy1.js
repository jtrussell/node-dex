var d = require('../lib/dex')
  , dex = new d.Dex();
  
dex._setFile('foobar.dex');
dex._setPassword('blargus');
dex._setConfig({foo: 'bar'});

console.log(dex._getConfig());

dex.save();