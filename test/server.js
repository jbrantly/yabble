/*
This is a small node.js server, so that you can test Yabble on your OS without using the file:/// protocol.
You need to
- install node.js (nodejs.org)
- install node package manager (npmjs.org)
- Type: npm install connect
- Type: node server.js ROOTDIR &
- Go to http://localhost:3000/index.html
*/

var connect = require('connect')

dir = process.argv[2]

connect(
	connect.static(dir)
).listen(3000)
