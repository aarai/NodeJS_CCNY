var fs = require('fs');

fs.stat('file.txt', function(err,stats){
	//console.log(stats);
	if(err) throw err;

	fs.rename('file.txt','newfile.txt', function(err) {
		if(err) throw err;
		console.log('file renamed');
	});
});