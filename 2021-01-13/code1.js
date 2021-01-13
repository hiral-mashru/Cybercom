var amount = [124,48,268]
 i=0
var tip = []
var bill = []

for(i=0;i<amount.length;i++){
    if(amount[i]<50){
        tip[i]=Math.floor(amount[i]*0.2);
        bill[i] = tip[i] + amount[i]
    } else  if(amount[i]<=200 || amount[i]>=50){
        tip[i]=Math.floor(amount[i]*0.15);
        bill[i] = tip[i] + amount[i]
    } else {
        tip[i]=Math.floor(amount[i]*0.1);
        bill[i] = tip[i] + amount[i]
    }
}

console.log("tip",tip)
console.log("bill",bill)
