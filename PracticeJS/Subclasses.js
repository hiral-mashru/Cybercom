//ES5
//superclass
var Person5 = function(name,yearOfBirth,job){
    this.name = name
    this.yearOfBirth = yearOfBirth
    this.job = job
}

Person5.prototype.calcAge = function(){
    var age = new Date().getFullYear() - this.yearOfBirth
    console.log(age)
}

//subclass
var Athlete5 = function(name,yearOfBirth,job,olympicGame,medals){
    Person5.call(this,name,yearOfBirth,job)//inherit
    this.olympicGame = olympicGame
    this.medals = medals
}

Athlete5.prototype = Object.create(Person5.prototype)

Athlete5.prototype.wonMedal =  function(){
    this.medals++;
    console.log(this.medals)
}

var heerAthlete5 = new Athlete5('heer',2000,'developer',1,10)
heerAthlete5.calcAge() //21
heerAthlete5.wonMedal()

//////////////////////////////////////////////////////////////////
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

class Athlete6 extends Person6 {
    constructor(name,yearOfBirth,job,olympicGame,medals){
        super(name,yearOfBirth,job) //to call superclass's constructor
        this.olympicGame = olympicGame
        this.medals = medals
    }
    wonMedal(){
        this.medals++
        console.log(this.medals)
    }
}

const heerAthlete6 = new Athlete6('heer',2000,'developer',3,16)
heerAthlete6.calcAge()//21
heerAthlete6.wonMedal()//17

