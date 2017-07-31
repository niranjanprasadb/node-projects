var fileSystem = require('fs');

fileSystem.mkdir('asyncDir', function() {
  fileSystem.readFile('readMe.txt', 'utf8', function (err, data){
    fileSystem.writeFile('./asyncDir/writeMe.txt', data);
  });
});

// fileSystem.unlink('./asyncDir/writeMe.txt', function () {
//   fileSystem.rmdir('asyncDir');
// });
