console.log(this) //Window

age(2000)
function age(year){
    console.log(2020-year)
    console.log(this) //Window
}

var heer = {
    name: 'heer',
    yr: 2000,
    age: function(){
        console.log(this)//output wll be heer object. as it's function expression
        console.log(this.name,2020 - this.yr)
        inner()//output: window, bcz inner() is a regular function so in browser, for regular functions, this keyword refers to Window object by default
        function inner(){
            console.log(this) 
        }
        new inner() //output: inner, bcz new keyword tells this keyword to refer the current   
        // inner();
    }
}

heer.age()

var mike = {
    name: 'mike',
    yr: 1990,
}
mike.age = heer.age; //borrow things from another object
mike.age()