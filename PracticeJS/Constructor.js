//we can assume it as a class
function Mobile(){
    this.model = '3310'
    console.log(this)
}
//we can assume it as an object
var mi = new Mobile() //Mobile object
var mii = Mobile() //Window Object
// var miii = mobile() //Uncaught ReferenceError: mobile is not defined, means it's case sensitive


function mobile(model){
    this.model =model
    console.log(this)
    console.log(this.model)
}
var mmi = new mobile('3310') //mobile object, this.model=3310
var mmmi = new mobile() //mobile object, this.model=undefined


