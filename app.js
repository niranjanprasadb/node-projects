var fileSystem = require('fs');

fileSystem.readFile('readMe.txt', 'utf8', function(err, data) {
  console.log(data);
});

console.log("Printing before Read Async call");


fileSystem.readFile('readMe.txt', 'utf8', function(err, data) {
  fileSystem.writeFile('writeMe.txt', data);
});

console.log("Printing before Read and Write Async calls");
