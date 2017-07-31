var http = require('http');
var fileSystem = require('fs');

var nodeServer = http.createServer(function(request, response){
  console.log(`Requested URL is ${request.url}`);
  var jsonObject =[
                    {
                      name:'Harsha',
                      class:'UKG',
                      age:5
                    },
                    {
                      name:'Jaanvi',
                      class:'Nursery',
                      age:1.6
                    },
                    {
                      name:'Harsha',
                      class:'NA',
                      age:2
                    }
                  ]

  if(request.url === '/home' || request.url === '/') {
    response.writeHead(200,{'Content-Type':'text/html'});
    fileSystem.createReadStream(__dirname+'/index.html').pipe(response);
  } else if(request.url === '/contact') {
    response.writeHead(200,{'Content-Type':'text/html'});
    fileSystem.createReadStream(__dirname+'/contact.html').pipe(response);
  } else if(request.url === '/api') {
    response.writeHead(200,{'Content-Type':'application/json'});
    response.end(JSON.stringify(jsonObject));
  } else {
    response.writeHead(200,{'Content-Type':'text/html'});
    fileSystem.createReadStream(__dirname+'/404.html').pipe(response);
  }

  });

nodeServer.listen(3000, '127.0.0.1');

console.log('Server at port 3000');
