require.ensure(['test', 'submodule/a', 'submodule/b'], function(require) {
	var test = require('test');
	var a = require('submodule/a');
	var b = require('submodule/b');
	
	a.foo(function(bfoo) {
		test.assert(bfoo == b.foo, 'a and b share foo through a relative require');
		test.print('DONE', 'info');	
	});
});