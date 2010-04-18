require('moduleA');
require.ensure(
	[
		'moduleB',
		'moduleC'
	], 
	function(require) {
		require('moduleB');
		require('moduleC');
	}
);