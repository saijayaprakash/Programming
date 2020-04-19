let a = [
    [1,2,3,4],
    [5,6,7,8],
    [9,10,11,12],
    [13,14,15,16]
];

let l = Math.floor(a.length/2);
let len = a.length-1;
for(let i=0;i<l;i++){
    for(let j=i;j<len-i;j++){
        let temp = a[j][len-i];
        
        a[j][len-i] = a[i][j];
        
        a[i][j] = a[len-j][i];
        
        a[len-j][i] = a[len-i][len-j];

        a[len-i][len-j] = temp;
    }
}
console.log(a);