var fs = require('fs')
var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  var buffer = fs.readFileSync('index.html')
  response.send(buffer.toString());
});

app.get('/bootsrap/css/bootstrap.css', function( req, res ){
	console.log("EWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW")	
	var buffer = fs.readFileSync('bootstrap/css/bootsrap.css');
	response.send(buffer.toString());
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
