//Check max(Cur_max+a[i], Cur_max)
//Check max(total_max,cur_max)
let arr = [-2, -3, 4, -1, -2, 1, 5, -3];

let cur_max = arr[0];
let max_total = arr[0];

for(let i=1;i<arr.length;i++){
    cur_max = Math.max(cur_max+arr[i],arr[i]);
    max_total = Math.max(cur_max,max_total);
}
console.log(max_total);
