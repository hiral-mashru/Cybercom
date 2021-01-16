var heer  = {
    name:'heer',
    age: 20,
    job: 'developer',
    presentation: function(style,timeOfDay){
        if(style==='formal'){
            console.log('Good '+timeOfDay+' I\'m '+this.name+', I\'m a '+this.job+' nd am '+this.age+' years old.');
        } else if(style ==='informal'){
            console.log('Hey What\'s up! I\'m '+this.name+', I\'m a '+this.job+' nd am '+this.age+' years old. Have a nice '+timeOfDay);
        }
    }
}

var harsh = {
    name: 'harsh',
    age: 21,
    job: 'designer'
}

heer.presentation('formal','morning')//this keyword will refer to heer //if i don't write 'morning' then it will write undefined instead of it.
heer.presentation.call(harsh,'informal','afternoon') //now this keyword will refer to harsh

// heer.presentation.apply(harsh,['informal','afternoon']) //but our code will not accept array but just want to show that it will be used with array. that's the only difference between call and apply

//bind works similar to call but it's not immedieately call the function but  it will generate the copy so that we can store it somewhere

var heerFrndly = heer.presentation.bind(heer,'informal')//bind allows us to preset some arguments here
heerFrndly('morning') 
heerFrndly('night')

heer.presentation.bind(heer,'formal','night') //won't work!!

harshFrndly = heer.presentation.bind(harsh,'formal')
harshFrndly() //undefined instead of 'night' 
harshFrndly('night')

/////////////////////////////////////////

var years = [1990,1991,1992,2018,1994,1895]

function arrayCalc(arr,fn){
    var arrRes = [];
    for(var i=0;i<arr.length;i++){
        arrRes.push(fn(arr[i]))
    }
    return arrRes;
}

function calculateAge(el){
    return 2020-el;
}
 
function isFullAge(limit,el){
    return el >= limit;
}

var ages = arrayCalc(years,calculateAge)
//bind allows us to preset the copy of arguments

var fullJapan = arrayCalc(ages,isFullAge.bind(this, 20))
var fullIndia = arrayCalc(arrayCalc(years,calculateAge),isFullAge.bind(this, 18))
console.log(fullJapan)
console.log(fullIndia)
console.log(ages)
