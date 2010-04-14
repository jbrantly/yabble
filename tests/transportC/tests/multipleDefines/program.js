require.def('program', ['require', 'exports', 'module', 'test', 'a'], function(require, exports, module) {
	var test = require('test');
	test.assert(typeof require == 'function', 'require is a function');
	test.assert(typeof exports == 'object', 'exports is an object');
	test.assert(module.id == 'program', 'module.id is program');
	test.assert(require('a').foo == 'bar', 'module a is available');
	test.print('DONE', 'info');
});

// This part could use some cleaning up
var aIsKnown = require.isKnown('a');
print((aIsKnown ? 'FAIL ' : 'PASS ') + 'a is not yet known', (aIsKnown ? 'fail' : 'pass'));

require.def('a', ['require', 'exports', 'module', 'test'], function(require, exports, module) {
	var test = require('test');
	test.assert(typeof require == 'function', 'require is a function');
	test.assert(typeof exports == 'object', 'exports is an object');
	test.assert(module.id == 'a', 'module.id is a');
	exports.foo = 'bar';
});