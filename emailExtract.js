fs = require('fs')
var stremail = ''

stremail = fs.readFileSync('test.txt', 'utf8') 
//console.log(stremail.length);


var counter = 0
 
words_arr = stremail.split(/\s+/)

for (let i=0; i<words_arr.length; i++){
    if (words_arr[i].endsWith('@softwire.com')) {
        console.log(words_arr[i])
    counter++
    }
}

console.log(counter) 
