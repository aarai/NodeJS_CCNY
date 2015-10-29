var http = require('http'),
	url = require('url');

http.createServer(function(req,res) {
	var params = url.parse(req.url, true).query;

	for(var param in params) {
		if(params.hasOwnProperty(param)) {
			console.log(params[param]);
		}
	}
	res.end();
}).listen(1337);

console.log('Server running on port 1337');