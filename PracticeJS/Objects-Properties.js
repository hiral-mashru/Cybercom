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

//new object syntax - Object constructor
var harsh = new Object() //var harsh ={ }
harsh.name = 'harsh'
harsh.birthyr = 2001
harsh['lname'] = 'mashru'
x='lname'
console.log(harsh[x]) //mashru
harsh.total = sum
function sum(){
    console.log("sum")
}
console.log(harsh.total)//ƒ sum(){console.log("sum")}
console.log(harsh.total()) // output: 'sum' then in next line, 'undefined'

////////////////////////////////////////////

function getData(){}

var obj = {
    getData: 'data',

    fn:function getData() {
        this.getData() //it will get fn's getData
        function fn(){
            console.log(this.getData) //window //it will get 40th line
        }
    }
}

///////////////////////////////////////////////////////////////
//set key of object dynamically
const dynamic = 'model'
const objj = {
    name: 'tiago',
    [dynamic]: 'xz++'
}
console.log(objj)

//Using the spread operator to combine objects
const obj1 = {'a': 1, 'b': 2}
const obj2 = {'c': 3}
const obj3 = {'d': 4}
// Combine them using the spread operator            
const objCombined = {...obj1, ...obj2, ...obj3}
// Result: {'a': 1, 'b': 2, 'c': 3, 'd': 4}
//Something to keep in mind while using this is that whenever you update one of 
//the objects, it doesn’t reflect those changes in the combined object.

////////////////////////////////////////////////////////////////////////////////////
function myFunc(theObject) {
    theObject.brand = "Toyota";
  }
  
  /*
   * Declare variable 'mycar';
   * create and initialize a new Object;
   * assign reference to it to 'mycar'
   */
  var mycar = {
    brand: "Honda",
    model: "Accord",
    year: 1998
  };
  
  /* Logs 'Honda' */
  console.log(mycar.brand);
  
  /* Pass object reference to the function */
  myFunc(mycar);
  
  /*
   * Logs 'Toyota' as the value of the 'brand' property
   * of the object, as changed to by the function.
   */
  console.log(mycar.brand);
