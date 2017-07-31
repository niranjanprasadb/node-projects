var filesystem = require('fs');

var readMe = filesystem.readFileSync('readMe.txt', 'utf8');
console.log(readMe);

filesystem.writeFileSync('writeMe.txt', readMe);
