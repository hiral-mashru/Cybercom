//ES6
{
    const a = 1
    let b = 3
    var c = 2
}
console.log(c)
// console.log(a+b)//Uncaught ReferenceError: a is not defined


//ES5
(function(){
    var c = 3;
})()
// console.log(c) //Uncaught ReferenceError: c is not defined



