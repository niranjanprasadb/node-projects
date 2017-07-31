var fileSystem = require('fs');

var readStream = fileSystem.createReadStream(__dirname + '/Resume_FullStack_11years.doc');

//var readStream = fileSystem.createReadStream(__dirname + '/Resume_FullStack_11years.doc', 'utf8');

readStream.on('data', function(chunk) {
  console.log('New Chunk Received:');
  console.log(chunk);
});
