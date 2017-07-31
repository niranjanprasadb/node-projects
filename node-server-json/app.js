var http = require('http');
var fileSystem = require('fs');

var nodeServer = http.createServer(function(request, response){
  console.log(`Requested URL is ${request.url}`);
  var jsonObject ={
                    name:'Harsha',
                    class:'UKG',
                    age:5
                  }

  response.writeHead(200,{'Content-Type':'application/json'});
  response.end(JSON.stringify(jsonObject));
});

nodeServer.listen(3000, '127.0.0.1');

console.log('Server at port 3000');
