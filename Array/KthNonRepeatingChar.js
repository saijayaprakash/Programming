let str = "Jaiiaap";
let k = 3;

let obj = {};
let temp = {};

for(let i=0;i<str.length;i++){
    if(obj[str[i]]){
        obj[str[i]]++;
    }
    else{
        obj[str[i]] = 1;
    }    
    if(obj[str[i]] == 1){
        temp[str[i]] = i;
    }
    else{
       delete temp[str[i]];
    }
}

temp = Object.keys(temp).sort(function(a,b){
    return temp[a] - temp[b];
});

console.log(temp[k-1]?temp[k-1]:-1);