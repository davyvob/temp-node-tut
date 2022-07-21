const names = require('./4-names');
const printName = require('./5-utils');
const alternativeExportEx = require('./6-alternativeflava');
require('./7-mindgrenade');

for (const key in names) {
    if (Object.hasOwnProperty.call(names, key)) {
        const element = names[key];
        printName(element)      
    }
}



console.log(alternativeExportEx);