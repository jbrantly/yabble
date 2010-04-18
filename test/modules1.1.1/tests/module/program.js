var test = require('test');

test.assert(module != null, 'program has module');
test.assert(module.id == 'program', 'module.id set to program');
test.assert(/^http(s?):\/\//.test(module.uri) && module.uri.substring(module.uri.length-10) == 'program.js', 'module.uri is absolute and ends with program.js');

var aModule = require('a').module();
var bModule = require('submodule/b').module();

test.assert(aModule != null, 'a has module');
test.assert(aModule.id == 'a', 'module.id set to a');
test.assert(/^http(s?):\/\//.test(aModule.uri) && aModule.uri.substring(aModule.uri.length-4) == 'a.js', 'module.uri is absolute and ends with a.js');

test.assert(bModule != null, 'submodule/b has module');
test.assert(bModule.id == 'submodule/b', 'module.id set to submodule/b');
test.assert(/^http(s?):\/\//.test(bModule.uri) && bModule.uri.substring(bModule.uri.length-14) == 'submodule/b.js', 'module.uri is absolute and ends with submodule/b.js');
test.print('DONE', 'info');