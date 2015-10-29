var fs = require('fs');

fs.writeFile('data.txt','hello world', function(err) {
	if(err) throw err;
	console.log('file created');
});