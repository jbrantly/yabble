exports.foo = function (cb) {
    require.ensure(['b'], function(require) {
    	cb(require('b'));
    });
};
