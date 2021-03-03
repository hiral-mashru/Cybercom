#!usr/bin/env node
var fs = require('fs');
// var dir = './tmp';

const [,,...args] = process.argv // to parse command line arguments
const[type,...moduleName] = args
if(type==='create-module') {
    if (!fs.existsSync(String(moduleName))){
        fs.mkdirSync(String(moduleName));
    }
}
// module.exports = folder