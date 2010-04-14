window.print = function(message, type) {
	ok(type == 'info' || type == 'pass', message);
}