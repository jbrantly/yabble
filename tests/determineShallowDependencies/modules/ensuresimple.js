require('moduleA');
require.ensure(['moduleB'], function(require) {
	require('moduleB');
	require('moduleC');
});