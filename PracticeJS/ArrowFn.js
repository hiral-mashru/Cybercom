const years = [1990,1991,1992,1993]

//ES5
var ages5 = years.map(function(el){
    return 2020-el
})
console.log(ages5)

//ES6
var ages6 = years.map(el => 2020-el)
console.log(ages6)

ages6 = years.map((el,index) => `Age element ${index+1} : ${2020 - el}.`)
console.log(ages6)

ages6 = years.map((el,index) => {
    const now = new Date().getFullYear() //2021
    const age = now - el
    return `Age element ${index+1} : ${age}.` 
})
console.log(ages6)

///////////////////////////////////////////////////////////////////////////////

//ES5
var box5 = {
    color: 'green',
    position: 1,
    clickme: function(){
        var self = this;
        document.querySelector(".green").addEventListener('click',function(){
            var str = 'This is box number '+self.position + ' and it is '+self.color
        alert(str)
        return str
        })
    }
}
box5.clickme() //'This is box number undefined and it is undefined' without self
console.log(box5.color)


//ES6
var box6 = {
    color: 'green',
    position: 1,
    clickme: function(){
        
        document.querySelector(".green").addEventListener('click',()=>{
            var str = 'This is box number '+this.position + ' and it is '+this.color
        alert(str)
        return str
        })
    }
}
box6.clickme() //'This is box number undefined and it is undefined' without self

//arrow function is used to preserve this keyword.


var box66 = {
    color: 'green',
    position: 1,
    clickme: () => {
        
        document.querySelector(".green").addEventListener('click',()=>{
            var str = 'This is box number '+this.position + ' and it is '+this.color
        alert(str)
        return str
        })
    }
}
box66.clickme() //This is box number undefined and it is undefined

///////////////////////////////////////////////////////////////////

function Person(name){
    this.name = name
    console.log(this)//Person
}

//ES5
Person.prototype.myFrnds5 = function(frnds){
    var arr = frnds.map(function(el){
        return this.name+' is frnds with '+el
    }.bind(this))
    console.log(arr)
}
var frnds = ['heer','harsh','mashru']
new Person('heer').myFrnds5(frnds) // [" is frnds with heer", " is frnds with harsh", " is frnds with mashru"] wiithout bind

//ES6
Person.prototype.myFrnds6 = function(frnds){
    var arr = frnds.map((el)=>{
        return this.name+' is frnds with '+el
    })
    console.log(arr)
}
var frnds = ['heer','harsh','mashru']
new Person('heer').myFrnds6(frnds) //["heer is frnds with heer", "heer is frnds with harsh", "heer is frnds with mashru"]



Person.prototype.myFrnds66 = (frnds)=>{
    var arr = frnds.map((el)=>{
        return this.name+' is frnds with '+el
    })
    console.log(arr)
}
var frnds = ['heer','harsh','mashru']
new Person('heer').myFrnds66(frnds) //[" is frnds with heer", " is frnds with harsh", " is frnds with mashru"]




