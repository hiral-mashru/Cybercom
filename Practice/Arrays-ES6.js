const boxes = document.querySelectorAll('.box')
console.log(boxes) //NodeList(3) [div.box, div.box, div.box]


//ES5
var boxesArr5 = Array.prototype.slice.call(boxes) //or 'boxes'
console.log(boxesArr5) //[div.box, div.box, div.box]
boxesArr5.forEach(function(cur) {
    cur.style.backgroundColor = 'dodgerblue'
});

//ES6
const boxesArr6 = Array.from(boxes) // or 'boxes'
console.log(boxesArr6) //[div.box, div.box, div.box]
boxesArr6.forEach(cur => {
    cur.style.backgroundColor = 'red'
})


//ES5
for(var i=0;i<boxesArr5.length;i++){
    if(boxesArr5[i].className === 'box blue'){
        continue; //skip this iteration
    }
    boxesArr5[i].textContent = 'I changed to blue'
}

//ES6
for(const cur of boxesArr6){
    if(cur.className.includes('red')){
        continue
    }
    cur.textContent = 'I changed to red'
}

///////////////////////////////////////////////////////////
//ES5
var ages = [12,14,19,18,27,20,35]
var full = ages.map(function(cur){
    return cur>=18
})
console.log(full)

console.log(full.indexOf(true))//2 //returns index first value that is>=18
console.log(ages[full.indexOf(true)])//19 //returns first value that is>=18


//ES6
console.log(ages.findIndex(cur => cur>=18))//2 //returns index first value that is>=18
console.log(ages.find(cur => cur>=18))//19 //returns first value that is>=18

//Create an array with unique values using the “Set” object
const arrayWithUniqueItems = [...new Set([1, 2, 3, 3,4,4,4,0])]
//  [1, 2, 3, 4, 0]