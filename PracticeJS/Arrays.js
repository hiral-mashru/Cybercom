var names = ['heer','harsh','mashru']
var yrs = new Array(1090,1969,2000)

console.log(names[0])
console.log(names)
console.log(names.length)
console.log(names[3]) //undefined

names[1] = 'bro'
console.log(names[1])

names[4]=23
console.log(names)
console.log(names[3])

console.log(names.length)
names[names.length] = 3
console.log(names)

var data = ['hmm','hmmmm',7,true]

data.push('pink') //add element to the end of the array
data.unshift(9) //add element to beginning
console.log(data)

data.pop() //remove element from the end
data.pop()
console.log(data)
data.shift() //remove from beginning
console.log(data)

console.log(data.indexOf(7)) //find position of element
console.log(data.indexOf('aaa'))

var isThat = data.indexOf('aaaa') === -1 ? 'it\'s not aaa' : 'it\'s you'
console.log(isThat)

//The reduce method is a great way to loop through an array and get one single 
//output based on the values inside the array.
let values = [13, 2, 27, 90, 8, 57, 34]; 
let sum = values.reduce((previous, current) => current += previous); 
let avg = sum / values.length; 
// avg = 33

//Shorten an array using its length property
let array = [0, 1, 2, 3, 4, 5, 6, 6, 8, 9]
array.length = 4
// Result: [0, 1, 2, 3]
//Important to know though is that this is a destructive way of changing the array.
//This means you lose all the other values that used to be in the array.

