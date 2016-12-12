var http = require('http');
var url = require('url');

var server = http.createServer(function(req, res) {
    res.writeHead(200, {"Content-Type": "text/plain"});
    res.end('Salut tout le monde');
});

server.on('close', function(){
	console.log('Bye bye !');
})

server.listen(8080);
server.close();