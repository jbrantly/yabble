window.print = function(message, type) {
	if (type == 'info') { 
		if (message == 'DONE') {
			start();
		}
	}
	else {
		ok(type == 'pass', message);
	}
}