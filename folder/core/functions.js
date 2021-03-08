setup.functions = {}

// require('../functions/funcFile')
const fs = require('fs')
var files = fs.readdirSync(__dirname+'/../functions/');
console.log("files",files)
if(files!== []){
    for (let i of files){
        var fileName = i.split('.')[0]
        setup.functions[fileName] = require(__dirname+'/../functions/'+fileName)
    }
}
console.log("setup.func",setup.functions)