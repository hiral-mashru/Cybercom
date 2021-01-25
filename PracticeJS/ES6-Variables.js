//let and const


//ES5
var name5 = 'Heer Mashru'
var age5 = 20
name5 = 'Harsh Mashru' //var-mutation
console.log(name5)
//var is function scoped


//ES6
const name6 = 'Hiral Mashru'
let age6 = 20
// name6 = 'Harsh Mashru'
console.log(name6) //error: Uncaught TypeError: Assignment to constant variable.
//so we won't use var in ES6
//let is block scoped


//ES5
function driverLicense5(passedTest){
    if(passedTest){
        console.log(fName) //undefined
        var fName = 'Heer'
        var yearOfBirth= 2000
        console.log(fName + ', born in '+yearOfBirth+', can now drive the car')
    }

}
driverLicense5(true)


//ES6
function driverLicense6(passedTest){
    // console.log(fName) //Uncaught ReferenceError: Cannot access 'fName' before initialization
    let fName
    const yearOfBirth = 2020 //we need to declare value here
    if(passedTest){
        fName = 'Heer'
        // yearOfBirth= 2000//Uncaught TypeError: Assignment to constant variable.
    }
    console.log(fName + ', born in '+yearOfBirth+', can now drive the car') //we get reference error:-can't access let and const variables bcz they are block scoped
}
driverLicense6(true)


let i = 20;
for(let i=0;i<5;i++){
    console.log(i)//0,1,2,3,4 
}
console.log(i) //20
//bcz of block scope

var i = 7 //Uncaught SyntaxError: Identifier 'i' has already been declared
function fnn(){
var i = 20; 
for(var i=0;i<5;i++){
    console.log(i)//0,1,2,3,4 
}
console.log(i) //5
}
console.log(i) //7
console.log(fnn()) //undefined , bcz fnn is not returning anything
