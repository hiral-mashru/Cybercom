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





