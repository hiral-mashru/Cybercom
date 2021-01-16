// IIFE - Immedietely Invoked Function Expression
// function game(){
//     var score = Math.random() * 10
//     console.log(score >= 5) //true
// }
// game() 

// function (){

// } // it gives error
//anonymous function
(function(){
    var score = Math.random() * 10
    console.log(score >= 5)
})(); //what's inside a '()' , cannot be a statement -> it's an expression, not declaration

// console.log(score)

(function(goodluck){
    var score = Math.random() * 10
    console.log(score >= 5 - goodluck)
})(5) //it will be called automatically,it's not for reusability
//it's used for creating a new scope nd its variables can't be accessed from 
// outside. so we can safely put variables - data privacy, doesn't affect other 
// variables in a global execution context

