var fName = 'heer'
var age = 20

age >= 20 ? console.log('drink beer') : console.log('drink juice')

var drink = age>= 18 ? 'beer': 'juice'
// same as :-
// if(age<=18){
//     var drink = 'beer';
// } else {
//     var drink = 'juice';
// }

console.log(fName+' can drink '+drink)

var job = 'developer'
switch(job){
    case 'developer':
        console.log(fName+' oww developer u r!')
        break
    case 'driver':
        console.log(fName+ ' drives')
        break
    default:
        console.log('owww')
}
age =2
switch(age){
    case age<18 :
        console.log(fName+' is a kid')
        break
    case age>=13 && age<20:
        console.log(fName+' is teenager')
        break
    case age>=20 && age <30:
        console.log(fName+' is young')
        break
    // case console.log('hj'):
    //     console.log('unique')
    default:
        console.log(fName+' is a girl')
}