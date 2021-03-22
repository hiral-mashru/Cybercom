const fs = require('fs')
if(!fs.readdirSync(__dirname+'/../crons/')!==[]){
    for (let i of fs.readdirSync(__dirname+'/../crons/')){
        require(__dirname+'/../crons/'+i)
    }
}