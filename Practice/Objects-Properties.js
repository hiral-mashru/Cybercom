//object-> key-value pair
//array ->orders matter a lot
//object -> order doesn't matter

//object literal
var heer = {
    fname: 'heer',
    lname: 'mashru',
    birthyr: 2000,
    family: ['harsh','mummy','papa'],
    job: 'developer',
    isMarried: false,
}
console.log(heer)
console.log(heer.birthyr)
console.log(heer['family'])
var x ='job'
console.log(heer[x])

heer.job = 'designer'
heer['isMarried'] = true
console.log(heer)

//new object syntax
var harsh = new Object()
harsh.name = 'harsh'
harsh.birthyr = 2001
harsh['lname'] = 'mashru'
console.log(harsh)