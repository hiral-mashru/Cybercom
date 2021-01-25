//Truthy Falsy
var height = 0;
if(height /*var is not defined bcz 0 is falsy value and if we write->*/  || height === 0 /* now var is defined now */ ){
    console.log('var is defined')
} else {
    console.log('var is not defined')
}

var height = '';
if(height || height === 0 /*it's not defined coz '' is falsy value */ ){
    console.log('var is defined')
} else {
    console.log('var is not defined')
}

height = 23
//equality operators
if(height=='23'){
    console.log('==')
} else {
    console.log('!!')
}