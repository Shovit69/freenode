const {readFileSync, writeFileSync} = require('fs')
console.log('start');
const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')

writeFileSync('./content/result-sync.txt',`Heres your data\n ${first} \n ${second}`, {flag: 'a'})
console.log('done with this');
console.log('starting new one');