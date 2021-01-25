a = 2001
b = 20 
var a;
var b;
// console.log(a=b)
console.log(a==b)
console.log(a===b)

// (function(goodluck){
//     var score = Math.random() * 10
//     console.log(score >= 5 - goodluck)
// })(5) 

var o1 = {
    name: 'heer'
}
var o2 = {
    name: 'harsh'
}
document.write([o1,o2])
console.log([o1,o2])


var arr = [1,3,3,5,6,7]
console.log(arr.slice(1,4))
console.log(arr)
console.log(arr.splice(1,4))
console.log(arr)

const dynamic = 'model'
const objj = {
    name: 'tiago',
    [dynamic]: 'xz++'
}
console.log(objj) //{name: "tiago", model: "xz++"}
console.log([...new Set([1, 2, 3, 3,4,4,4,0])]) // [1, 2, 3, 4, 0]

function myFunc(theObject) {
    theObject.brand = "Toyota";
  }
  
  /*
   * Declare variable 'mycar';
   * create and initialize a new Object;
   * assign reference to it to 'mycar'
   */
  var mycar = {
    brand: "Honda",
    model: "Accord",
    year: 1998
  };
  
  /* Logs 'Honda' */
  console.log(mycar.brand);
  
  /* Pass object reference to the function */
  myFunc(mycar);
  
  /*
   * Logs 'Toyota' as the value of the 'brand' property
   * of the object, as changed to by the function.
   */
  console.log(mycar.brand);

  sessionStorage.setItem('key','value')

console.log(JSON.parse(localStorage.getItem('admin@gmail.com'))['email'] === 'admin@gmail.com')
console.log(localStorage.getItem('admin@gmail.com') === 'admin@gmail.com')

console.log(new Date().getDate()+ "/"+new Date().getMonth()+ "/"+new Date().getFullYear()+ "-"+new Date().getHours()+ ":"+new Date().getMinutes()+ ":"+new Date().getSeconds())



