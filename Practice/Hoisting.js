 function fn(year){
    console.log(2020-year)
 }
 fn(2000)
//     here 1st we define the function then we call(declare) it but if 1st we 
//     call the function and in next line if we define it then, calling the 
//     function is stored in variable object means function is not executed 
//     yet but it is hoisted. It only works for function declarations,not for 
//     function expression.

//  fn(year)
//  var fn = function(year) {
//     console.log(2020-year)
//  }
//     it will give error. fn(year) is not going to store in variable object or
//     it is not hoisted. so it will give error that there is no 'fn' function.

 console.log(age) //output : undefined
 var age = 20
 console.log(age) //output: 20
//  -> it won't give error, bcz age is stored in variable object, it's hoisted 
//     and set to undefined. and when it defines, it will update the value from
//     undefined to value.

//  console.log(age)
// ->  it will give error that there is no age defined.

console.log(age) //output : undefined
 var age = 20 //it's stored in variable object of global executed context

 function foo(){
    console.log(age) //output: undefined
    var age = 32 //it's stored in variable object of execution context of foo function
    console.log(age) //output: 32
 }
 console.log(age) //output: 20
//  -> these two variables (age) are not same.

//QUERY
h = 5 //it automatically takes h as 'var'
console.log(h) //output: 5 
var h;

i=5;
console.log(i) //error why?
let i; 

j=5
console.log(j)//error
const j; //const values run first in JS ? //hoisting doesn't support const.