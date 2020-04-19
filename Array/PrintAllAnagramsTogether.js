let arr = ["cat", "dog", "tac", "god", "act"];

let obj = {};

for(let x=0;x<arr.length;x++){
    let hash = 0;
    for(let i=0; i < arr[x].length; i++){
        let char = arr[x].charCodeAt(i);
        hash += char;
    }
    if(!obj[hash])
        obj[hash] = [];
    obj[hash].push(arr[x]);
}

for(key in obj){
    console.log(obj[key]);
}
