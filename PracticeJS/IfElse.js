var fName = 'Heer'
var civilStatus = 'married'

if(civilStatus === 'married'){ // the output value of if condition is either true or false
    console.log(fName,'is married.')
} else {
    console.log(fName+' will marry soon.')
}

var isMarried = false
if(isMarried){
    console.log(fName,'is married.')
} else {
    console.log(fName+' will marry soon.')
}

//query
if(console.log('')){
    console.log('owww')
} else {
    console.log('ohh')
}

//Shorten your “if” statements
// Instead of using this                                      
if (iAmHungry) {
    bakeAnEgg()
 }
 // You can use this
 if (iAmHungry) bakeAnEgg()
 // Or this
 iAmHungry? bakeAnEgg() : 0

