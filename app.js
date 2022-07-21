const {readFileSync , writeFileSync} = require('fs');


const first = readFileSync('subfolder/first.txt' , 'utf8')
const second = readFileSync('subfolder/second.txt' , 'utf8')

writeFileSync('subfolder/third.txt' , 'eyoooo');

console.log(first , second)



