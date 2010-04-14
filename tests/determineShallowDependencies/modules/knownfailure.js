require('moduleA');
require.ensure(['moduleA'], function(require) {
	require('moduleA');
});
/* require('moduleB') */
// require('moduleB')