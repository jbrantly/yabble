require.define({
	"program": function(require, exports, module) {
		var test = require('test');
		test.assert(typeof require == 'function', 'require is a function');
		test.assert(typeof exports == 'object', 'exports is an object');
		test.assert(module.id == 'program', 'module.id is program');
		
		require('a');
		
		test.print('DONE', 'info');
	},
	"a": {
		injects: ['require'], 
		factory: function(require, exports, module) {
			var test = require('test');
			test.assert(typeof require == 'function', 'require is a function');
			test.assert(typeof exports == 'undefined', 'exports is undefined');
			test.assert(typeof modules == 'undefined', 'module is undefined');
		}
	}
}, ['test']);