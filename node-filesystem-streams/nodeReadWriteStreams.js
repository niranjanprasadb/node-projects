var fileSystem = require('fs');


var readStream = fileSystem.createReadStream(__dirname + '/Resume_FullStack_11years.doc', 'utf8');
var writeStream = fileSystem.createWriteStream(__dirname + '/Resume.doc');

readStream.on('data', function(chunk) {
  console.log('New Chunk Received');
  writeStream.write(chunk);
});
