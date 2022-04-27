fs = require('fs')
var stremail = ''

stremail = fs.readFileSync('test.txt', 'utf8') 
//console.log(stremail.length);


const emailRegex = /@softwire\.com\b/g;
const matches = stremail.match(emailRegex);
console.log(matches);
