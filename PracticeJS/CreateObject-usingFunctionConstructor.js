//function constructor

var heer = {
    name: 'heer',
    yearofBirth: 2000,
    job: 'developer'
};

//fuction constructor
var Person = function(name, yearofBirth, job){
    this.name = name;
    this.yearofBirth = yearofBirth;
    this.job = job
    // console.log(this)
    // this.calculateAge = function(){
    //     console.log(2020-this.yearofBirth)
    // }
}

Person.prototype.calculateAge = function(){
    console.log(2020-this.yearofBirth)
} 

Person.prototype.lastName = 'Mashru'

//new: empty object is createdthen constructor is called with arguments, so that function is called.
//new keyword point this keyword to not window object but to the object that is created.
var heer = new Person('heer', 2000, 'developer') //instantiation //object is created
var harsh = new Person('harsh', 2000, 'designer')

heer.calculateAge()
harsh.calculateAge()

console.log(heer.lastName)
console.log(harsh.name+' '+harsh.lastName)

//prototype chain
console.log(heer.__proto__ === Person.prototype)//true
console.log(heer.hasOwnProperty('job'))//true
console.log(heer.hasOwnProperty('lastName'))//false
console.log(heer instanceof Person)//true

var x = [2,3,4] //Array object
x.length //3 -  Array has length prototype that's why we can use it directly

