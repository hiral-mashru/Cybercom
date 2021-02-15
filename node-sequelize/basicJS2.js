var message = "updted msg"

console.log(message)

function hey(){
    console.log(global) //global keyword
    // console.log(window) //will give error
    global.console.log("hey")
}
    
hey();

module.exports.msg = message
module.exports.hey = hey

// OR
// module.exports = {
//     msg: message,
//     hey: hey
// }
console.log(module)