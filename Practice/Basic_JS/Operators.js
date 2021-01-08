//Math operators
var yearH = 2021 - 20
var yearM = 2021- yearM //yearM = NaN = Not a Number
console.log(yearM)
var yearM = 2021- yearH
console.log(yearM)
console.log(yearH * yearM)
console.log(yearH + yearM)
console.log(yearH - yearM)
console.log(yearH % yearM)
console.log(yearH / yearM)

//logical operator
var year = yearH > yearM
console.log(year) //true or false
console.log(yearH < yearM)
console.log(yearH != yearM)
console.log(yearH = yearM) //query
console.log(yearH == yearM) //query 
console.log(yearH === yearM) //query

//typeof operator
console.log(typeof(year))
console.log(typeof year)
console.log(typeof NaN) //number
console.log(typeof undefined) //undefined
console.log(typeof null) //object
console.log(typeof '') //string
console.log(typeof 2) //number
console.log(typeof true) //boolean
var obj;
console.log(typeof obj)//undefined
var obj = null
console.log(typeof obj) //object

//query: how to get null in typeof operator

//Operator Precedence
var a = 2000
var b = 1998
var c = 20

//multiple operatoes
var x = a - b >= c
console.log(x)

//grouping
console.log( (a+b)/2 )

//multiple assignment
var x,y
x = y = (3+5)*4-6
console.log(x,y)


x=2
x *= 2 //same as x = x * 2
console.log(x)
x++ // = x+=1 = x=x+1
console.log(x)
console.log(2**2**3)
a=2
console.log(a++)
console.log(a)