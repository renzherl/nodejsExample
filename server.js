var http = require('http');
var color = require('colors');

http.createServer(function (request, response) {
	if (request.url === '/') {
		response.writeHead(200, { 'Content-Type': 'text/plain' });
		response.end('Hello World!\n');
	}

	if (request.url === '/strong') {
		response.writeHead(200, { 'Content-Type': 'text/html' });
		response.end('Hello <strong>World</strong>!\n');
	}

}).listen(8888);

console.log('Server running at http://127.0.0.1:8888/'.rainbow);