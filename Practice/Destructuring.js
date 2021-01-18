//ES5
var John = ['heer', 20]
var name5 = John[0]
var age5 = John[1]

//ES6
const [name6,age6] = ['heer',20]
console.log(name6)
console.log(age6) //destructed

////////////////////////////////////////////////
const obj = {
    fName: 'heer',
    lName: 'mashru'
}

const {fName,lName} = obj
console.log(fName)
console.log(lName)

const {fName: a,lName: b} = obj
console.log(a)
console.log(b)
/////////////////////////////////////////////////
function calcAgeRetirement(year){
    const age = new Date().getFullYear() - year
    return [age, 65-age]
}
const [age2,retirement] = calcAgeRetirement(2000)
console.log(age2) //21
console.log(retirement)//44
console.log(calcAgeRetirement(2000)) //[21, 44]


