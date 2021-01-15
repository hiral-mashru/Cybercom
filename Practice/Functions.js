function calcAge(birthYr){
    return 2020 - birthYr
}
// console.log(calcAge) //it will write whole function!
age=calcAge(2000)
console.log('age: '+calcAge(2000) /*or age */)
console.log('age: '+calcAge(200))
console.log('age: '+calcAge(2990))

//function declaration
function retirement(birthYr,fName){
    var age = calcAge(birthYr)
    var retired = 55-age
    if(retired>0){
        console.log(fName+' didn\'t retire')
    } else {
        console.log(fName+' retired')
    }
    console.log(retired+' '+ age)
    return retired,age
}

console.log(retirement(2000,'heer'))//it will write age!

//JS's function doesn't return multiple values, u can make an array or object and can return it.

//function expression
var work = function(job,fName){
    switch(job){
        case 'teacher':
            return fName+ ' teaches'
        case 'developer':
            return fName+' develops' //function immediately ends here after returning so need of 'break'
        // default:
        //     return fName+' does something'
    }
}
console.log(work('developer')) //undefined develops
console.log(work('developer','heer'))
console.log(work('amazon','harsh')) //undefined

alert(fun)
var fun = function(){
    return 5
}
alert(fun)
alert(fun())

funn()
function funn(){
    var x = 5
    function fun(){
        x=6
        return x
    }
    console.log(x)//5
    console.log(fun()) //6
}