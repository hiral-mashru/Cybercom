//premitives
var a = 23;
var b = a;
a = 46;
console.log(a)
console.log(b)

//objects
var obj1 = {
    name: 'heer',
    age: 20,
}
var obj2 = obj1; //giving reference
obj1.age = 30;
console.log(obj1.age)//30
console.log(obj2.age)//30 ..bcz of reference

//functions
var age = 20;
var obj = {
    name:'heer',
    city: 'rajkot'
}

function change(a,b){
    a=30;//it won't affect outside the function.
    b.city = 'ahmedabad'// it will affect,bcz it's reference of object, it's pointing to object and it will affect outside the function also.
}
change(age,obj)

console.log(obj.city)
console.log(age)