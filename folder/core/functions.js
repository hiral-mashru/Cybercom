setup.functions = {}

// require('../functions/funcFile')
const fs = require('fs')
var files = fs.readdirSync(__dirname+'/../functions/');
console.log("files",files)
var stats;
if(files!== []){
    for (let i of files){
        stats = fs.statSync(__dirname+'/../functions/'+i);
        check(stats)
        // if(stats.isDirectory(i)){
        //     files = fs.readdirSync(__dirname+'/../functions/'+i);
        // }


        // var fileName = i.split('.')[0]
        // setup.functions[fileName] = require(__dirname+'/../functions/'+fileName)
    }
}

function directory(stats){

}

function check(stats){

}

console.log("setup.func",setup.functions)