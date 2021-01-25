var firstName = 'Heer'
var age = 20

console.log(firstName + ' is of '+ age) //Type coercion (JS automatically uses type conversion)

var job, isMarried;
job = 'developer'
isMarried = false
console.log(job+isMarried) //will not take space between values
console.log(job,'-\n',isMarried) //will take space between values
//'\n' is for new line
// var job,isMarried = 'developer', false (won't work)

//Variable Mutation
age = 'abc'
alert(age) //pop-up

var name = prompt('Whatis ur name?')
// console.log(name)
alert(name)