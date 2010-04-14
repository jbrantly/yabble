require('moduleA');
require.ensure(['moduleA'], function(require) {
	require('moduleA');
});