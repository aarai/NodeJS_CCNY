

var http = require('http');

http.createServer(function(req,res){
	res.writeHead(200, {'Content-Type':'text/html'});
	res.end('<h1>Hello World</h1>');
}).listen(1337);

console.log('Server running on port 1337');

