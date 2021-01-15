//passing functions as arguments

var years = [1990,1991,1992,1993,1994,1895]

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

function isFullAge(el){
    return el >= 18;
}

function maxHeartRate(el){
    if(el>=18 && el<=81){
        return Math.round(206.9 - (0.67+el))
    } else {
        return -1;
    }
    
}

var ages = arrayCalc(years,calculateAge);//here we dont write calculateAge() bcz right now we dont want to call it, it will be called in the arrayCalc function so right now calculateAge() is callback function so we don't write () over here.
var fullAges = arrayCalc(ages,isFullAge)
var rates = arrayCalc(ages,maxHeartRate)

console.log(ages)
console.log(fullAges)
console.log(rates)
