let fName = 'Hiral'
let lName = 'Mashru'
const yearOfBirth = 2000

function calcAge(year){
    return 2020-year;
}

//ES5
console.log('This is '+fName+' '+lName+'. Born in '+yearOfBirth+', Today she is '
             +calcAge(yearOfBirth))

//ES6
console.log(`This is ${fName} ${lName}. She was born in ${yearOfBirth}. And today
she is ${calcAge(yearOfBirth)}.`)

const n = `${fName} ${lName}`
console.log(n.startsWith('H')) //true
console.log(n.startsWith('Hi')) //true
console.log(n.startsWith('h')) //false
console.log(n.endsWith('u')) //true
console.log(n.endsWith('ru')) //true
console.log(n.includes(' ')) //true
console.log(n.split(' ')) //show array ['Hiral','Mashru']
console.log(n.includes('A')) //false
console.log(n.includes('a')) //true
console.warn(`${fName} `.repeat(5)) //HiralHiralHiralHiralHiral

