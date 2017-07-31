var fileSystem = require('fs');


var readStream = fileSystem.createReadStream(__dirname + '/readMe.txt', 'utf8');
var writeStream = fileSystem.createWriteStream(__dirname + '/writeMe.txt');

readStream.pipe(writeStream);
