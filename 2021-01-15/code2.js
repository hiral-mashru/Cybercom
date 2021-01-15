//fibonacci series

var a = 0
var b = 1
var arr = []

arr.push(a)
arr.push(b)

for(var i = 2; i <= 11; i++){
    arr.push(arr[i-1]+arr[i-2])
}
console.log(arr)