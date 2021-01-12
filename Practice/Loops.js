for(var i=1;i<=20;i+=2){
    console.log(i)
}

//for loop
var heer = ['heer','mashru',20,2000,true]
for(var i=0;i<=heer.length;i++){
    console.log(heer[i]) //last element will be undefined!
}

//while loop
var i = 0
while(i<heer.length){
    console.log(heer[i])
    i++
}

//continue and break statements
var heer = ['heer',20,'mashru',2000,true]
for(var i=0;i<=heer.length;i++){
    if (typeof heer[i] !== 'string') 
        // continue; //it will go for next iteration
        break; //it will break the loop
    console.log(heer[i]) //last element will be undefined!
}

//looping backwards
for(var i=heer.length;i>=0;i--){
    console.log(heer[i]) //1st element will be undefined
}