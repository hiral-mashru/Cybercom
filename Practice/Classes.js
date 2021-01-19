//ES5
var Person5 = function(name,yearOfBirth,job){
    this.name = name
    this.yearOfBirth = yearOfBirth
    this.job = job
}

Person5.prototype.calcAge = function(){
    var age = new Date().getFullYear() - this.yearOfBirth
    console.log(age)
}

var heer5 = new Person5('heer',2000,'developer')
heer5.calcAge() //21


//ES6
class Person6 {
    constructor(name,yearOfBirth,job){
        this.name = name
        this.yearOfBirth = yearOfBirth
        this.job = job
    }
    // var a = 5; //You can't write properties here
    calcAge(){ //no function keyword, no prototype
        var age = new Date().getFullYear() - this.yearOfBirth
        console.log(age)
    }

    static greeting(){
        console.log("heyy")
    }
}
var heer6 = new Person6('heer',2000,'developer')
//static methods are attached to the class but not inherited
heer6.calcAge() //21
heer6.greeting() //Uncaught TypeError: heer6.greeting is not a function //can't inherit
Person6.greeting() //heyy
//class definitions are not hoisted,so we need to write class first then we can call/use it.
//in class, we can only add methods, not properties

