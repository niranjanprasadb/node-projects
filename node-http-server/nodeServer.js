var http = require('http');

var nodeHTTPServer = http.createServer(function(request, response) {
  console.log(`Request URL ${request.url}`);
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.end('Here is my response....');
});

nodeHTTPServer.listen(3000, '127.0.0.1');
