function compare_item(a, b){
    if(a.item < b.item){
            return -1;
    }else if(a.item > b.item){
            return 1;
    }else{
            return 0;
    }
}

function compare_qty(a, b){
    if(a.qty < b.qty){
            return -1;
    }else if(a.qty > b.qty){
            return 1;
    }else{
            return 0;
    }
}
cart = [{item: "Berry", qty: 3},
    {item: "Appleee", qty: 6},
    {item: "Kiwi", qty: 1}];
console.log("by item: ",cart.sort(compare_item));
console.log("by qty: ",cart.sort(compare_qty));