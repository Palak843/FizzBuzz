fs = require('fs')
fs.readFile('test.txt', 'utf8', function (err,stremail) {
  if (err) {
    return console.log(err);
  }
  console.log(stremail);
})

