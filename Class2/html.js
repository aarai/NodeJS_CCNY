var http = require('http'),
	fs = require('fs');

http.createServer(function(req,res){
	fs.readFile('index.html',function(err, html) {
		if(err) throw err;
		res.writeHead(200, {'Content-Type':'text/html'});
		res.end(html);
	});
}).listen(1337);

console.log('Server running on port 1337');