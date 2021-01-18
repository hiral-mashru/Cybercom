//new object syntax - Object constructor
var harsh = new Object() //var harsh ={ }
harsh.name = 'harsh'
harsh.birthyr = 2001
harsh['lname'] = 'mashru'
harsh.total = sum
function sum(){
    console.log("sum")
}
console.log(harsh.total)//ƒ sum(){console.log("sum")}
console.log(harsh.total()) // output: 'sum' then in next line, 'undefined'