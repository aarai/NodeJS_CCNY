var dns = require('dns');

dns.lookup('www.google.com', function(err, address, family) {
	if(err) throw err;
	console.log('address %s' + address);
	console.log('family %s', family);
});