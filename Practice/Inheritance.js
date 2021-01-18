//single - multilevel inheritance
//prototype chain - prototype inheritance - parent prototype to child prototype
//when we create a constructor, 2 objects are going to create - 1)constructor_name object and 2)function's prototype object (prototype property)
//prototype object has one also property : __proto__ which points to -> Object.prototype, it has one property __proto__ which points to null
// so every object points to  Object.prototype, it has one property __proto__ which points to null

function Mobile(){
    this.a = 10
}

var m = new Mobile()
console.log(m.a) //10
console.log(m) //Mobile {a: 10} -> __proto__: constructor: ƒ Mobile() -> __proto__: constructor: ƒ Object()

function fn(){
    var a = 10
    return a
}
console.log(fn()) //10

var obj = {
    b: 13,
    c: 14,
}
console.log(obj) //{b: 13, c: 14} -> __proto__: constructor: ƒ Object()

////////////////////////////////////////////////////////////////
//Parent
function Fruit(){
    this.f = 10
}
var r = new Fruit()

//child
function Apple(){
    Fruit.call(this) //without this, pp.f = undefined
    this.p = 20
}
var pp = new Apple()
console.log(pp.f) //10

/////////////////////////////////////////
//prototype inheritance

//parent
var Fruit = function(){  //it creates 2 objects: Fruit and Fruit.Prototype 
    this.f = 10 
}
Fruit.prototype.z = 30 //in Fruit.Prototype, z=30 

//use of Prototype
//this f property will be copied in every Fruit's objects, that means every 
//Fruit's objects that we create, they have 'copies of 'f' property, but z property 
//will not be copied. when object needs z, it will search for z in its own object 
//but z will not be found, then it will go to Fruit's prototype and there it will 
//find z. So z is available in Fruit's prototype only. It won't be copied in any 
//object. it doesn't waste memory.

//child
var Apple = function(){
    Fruit.call(this)
    this.p = 20
}
//prototype inheritance
Apple.prototype = Object.create(Fruit.prototype)
Apple.prototype.constructor = Apple

var pp = new Apple()
//it should be in this format
console.log(pp.p) //20
console.log(pp.f) //10
console.log(pp.z)//30
document.write(pp.z)//30

var r = new Fruit()
console.log(r.z , r.f, r.p)//30 10 undefined
 
Fruit.prototype.z = 300
console.log(pp.z,r.z)//300 300

Apple.prototype.z = 200 //it will override Apple's z,but not Fruit's z.
console.log(pp.z)//200
