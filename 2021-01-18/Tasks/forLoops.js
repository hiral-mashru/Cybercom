// for - loops through a block of code a number of times
// for/in - loops through the properties of an object
// for/of - loops through the values of an iterable object
// while - loops through a block of code while a specified condition is true
// do/while - also loops through a block of code while a specified condition is true
var cars = ['car1','car2','car3']
for (i = 0, len = cars.length, text = ""; i < len; i++) {
    text += cars[i] + "<br>";
}
console.log(cars,len,i)

/////////////////////////////////////////////////////////////

var i = 2;
var len = cars.length;
var text = "";
for (; i < len; i++) {
  text += cars[i] + "<br>";
}
console.log(cars)

////////////////////////////////////////////////////////////

// var i = 0;
var len = cars.length;
for (; i < len; ) {
  text += cars[i] + "<br>";
  i++;
}
console.log(cars)

////////////////////////////////////////////////////////////

var A = {
    x: 'abc'
}
for(x in A){
    console.log(A)
}

///////////////////////////////////////////////////////////

var person = {fname:"John", lname:"Doe", age:25};

var text = "";
var x;
for (x in person) {
  text += person[x];
}
console.log(text)

////////////////////////////////////////////////////////

var cars = ["BMW", "Volvo", "Mini"];
var x;

for (x of cars) {
  document.write(x + "<br >");
}



