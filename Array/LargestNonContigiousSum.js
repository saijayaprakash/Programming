let arr = [1, 2, 3, 4, 5, 1];

let exc = 0;
let incl = arr[0];

for(let i=1;i<arr.length;i++){
    let exec_new = Math.max(incl,exc);
    incl = Math.max(arr[i]+exc,arr[i]);
    exc = exec_new;
}

console.log(Math.max(incl,exc));