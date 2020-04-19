let arr = [10, -3, -4, 7, 6, 5, -4, -1];

let total = 0;
arr.map(function(a){
    total += a;
});

let sum1 = kandane(arr);
arr.map(function(a,ind,arr){
    arr[ind] = -1*arr[ind];
});

let sum2 = kandane(arr);
sum2 = total - (-1*sum2);

console.log("Max Circular Sum is:",Math.max(sum1,sum2));


function kandane(arr){
    let cur_sum = 0;
    let max_sum = 0;

    for(let i=0;i<arr.length;i++){
        cur_sum = Math.max(cur_sum+arr[i],arr[i]);
        max_sum = Math.max(cur_sum,max_sum);
    }

    return max_sum;
}