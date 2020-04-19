// Given an array of distinct integers, the task is to find two pairs (a, b) and (c, d) such that ab = cd, where a, b, c and d are distinct elements.
//Check if a[i]+a[j] is present in the Obj if not put it else Print it
let a = [1,3,9,7,5,4];
let obj = {};

function findDistinctElements(){
    for(let i=0;i<a.length;i++){
        for(let j=i+1;j<a.length;j++){
            if(obj[a[i]+a[j]]){
                console.log(a[i],a[j],obj[a[i]+a[j]]);
            }
            else{
                obj[a[i]+a[j]] = [a[i],a[j]];
            }
        }
    }    
}

findDistinctElements();