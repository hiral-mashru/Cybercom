function retirement(retirementAge){
    var a = ' years left until retirement'
    return function(yearOfBirth){
        var age = 2020 - yearOfBirth
        console.log((retirementAge - age) + a)
    }
}

var retirementUS = retirement(60) 
// here we are calling retirement function, and as a value it is returning another 
//function. so retirement function' work is over and its execution is completed, 
//it has returned value(function) , but still in the inner function, we can use 
//'a' variable of retirement function that has already finished and it's gone out 
//of scope!but still we can use 'a' variable! it's called clauser

retirementUS(2000)

//or
retirement(60)(2000); 
retirement(2000)(60)

retirement(65)(2000) //germany
retirement(67)(2000) //iceland

///////////////////////////////////////////////////////////////////

// function interviewQuestion(job){
//     if(job === 'designer'){
//         return function(name){
//             console.log(name + ', can u plz explain what UX design is ?')
//         }
//     }
//     else if(job === 'teacher'){
//         return function(name){
//             console.log('wht subject do u teach, '+name+'?')
//         }
//     } else {
//         return function(name){
//             console.log('hello '+name+' what do u do?')
//         }
//     }
// }

//using clauser:

function interviewQuestion(job){
    return function(name){
        if(job === 'designer'){
            console.log(name + ', can u plz explain what UX design is ?')
        }
        else if(job === 'teacher'){
            console.log('wht subject do u teach, '+name+'?')
        }
        else {
            console.log('hello '+name+' what do u do?')
        }
    }
}

interviewQuestion('designer')('heer')
