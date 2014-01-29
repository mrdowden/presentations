var static = require('node-static');

//
// Create a node-static server instance to serve the './public' folder
//
var file = new static.Server('.');

require('http').createServer(function (request, response) {
    file.serve(request, response, function(err, res) {
		if(err) {
			console.error("> Error serving " + request.url + " - " + err.message);
			response.writeHead(err.status, err.headers);
			response.end();
		}
	});
}).listen(8080);

console.log("> node-static is listening on http://localhost:8080");
