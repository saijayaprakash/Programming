var a = [4,4,2,2,3];


function maxProfit(a){
    let min_elem = a[0];
    let max_sum = 0;
    let day = -1;
    
    for(let i=1;i<a.length;i++){
        let diff = a[i] - min_elem;
        if(diff>max_sum){
            max_sum = diff;
            day = min_elem;
        }
        min_elem = a[i]<min_elem?a[i]:min_elem;
    }
    console.log("Invest on "+day);
    return max_sum;
}

console.log("Max Profit Aquired is:"+maxProfit(a));