var http = require('http');
var fileSystem = require('fs');

var nodeServer = http.createServer(function(request, response){
  console.log(`Requested URL is ${request.url}`);
  response.writeHead(200,{'Content-Type':'text/plain'});
  var readStream = fileSystem.createReadStream(__dirname + "/readMe.txt");
  readStream.pipe(response);
});

nodeServer.listen(3000, '127.0.0.1');

console.log('Server at port 3000');
