//const { match } = require('assert');
fs = require('fs')
var stremail = fs.readFileSync('test.txt', 'utf8') 
//console.log(stremail.length);

//exercise 2
//const emailRegex = /@softwire.com\b/g;
//const matches = stremail.match(emailRegex);
//console.log(matches);


const allDomainRegex = /\b(\S+)@(\S+)\b/g;
const matches = stremail.match(allDomainRegex);
//console.log(matches)

const domainSet = new Set();

matches.forEach((email) => { 
    const Indexval = email.indexOf('@')
    const domain = email.slice(Indexval);
    //console.log(email.slice(Indexval));
    domainSet.add(domain);
})
/*
//matches.forEach(count);
function count(email){
    //console.log(email);
    const Indexval = email.indexOf('@')
    const domain = email.slice(Indexval);
    //console.log(email.slice(Indexval));
    domainSet.add(domain);
}
*/
//console.log(domainSet);
const domainCount = {}
domainSet.forEach((domain) =>{
    domainCount[domain] = 0;
})
for (let i=0;i< matches.length;i++){   
    const email = matches[i];
    const Indexval = email.indexOf('@');
    const domain = email.slice(Indexval);

    domainCount[domain] = domainCount[domain] + 1;
}

console.log (domainCount);