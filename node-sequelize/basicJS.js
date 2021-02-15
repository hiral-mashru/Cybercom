// function hey(){
//     console.log(global) //global keyword
//     // console.log(window) //will give error
//     global.console.log("hey")
// }

// hey();

// globalThis.setTimeout(function(){
//     console.log("timeout")
// }, 2000)

//////////////////////////////////////////////////////

const basicJS2 = require('./basicJS2')

var message = "message"
console.log(module)
console.log(message)
console.log(basicJS2.msg)
console.log(basicJS2.hey)
console.log(basicJS2)