(function() {
	
	var messages = [];
	var outputDiv;
	
	window.onload = function() {
		//console.log('onload', messages.length);
		var body = document.getElementsByTagName('body')[0];
		outputDiv = document.createElement('div');
		body.appendChild(outputDiv);
		
		for (var i = 0, n = messages.length; i<n; i++) {
			print(messages[i]);
		}
	};
	
	
	window.print = function() {
		if (outputDiv) {
			var div = document.createElement('div');
			for (var i = 0, n = arguments.length; i<n; i++) {
				var span = document.createElement('span');
				span.appendChild(document.createTextNode(arguments[i]));
				div.appendChild(span);
			}
			outputDiv.appendChild(div);
		}
		else {
			messages.push(Array.prototype.slice(arguments, 0));
		}
	}
	
})();
