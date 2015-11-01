'use strict';

var finalhandler = require('finalhandler');
var http = require('http');
var serveStatic = require('serve-static');
// Serve up public/ftp folder
var serve = serveStatic('public/', {'index': ['index.html', 'index.htm']});
// Create server
var server = http.createServer(function(req, res){
  let done = finalhandler(req, res)
  serve(req, res, done)
  console.log('swerve');
});
 // Listen
server.listen(1337);
