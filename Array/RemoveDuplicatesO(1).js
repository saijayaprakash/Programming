let s = "eeekssaaa";
s = s.split("");
let x = 97;
let z = 0;
let j = 0;
for(let i=0;i<s.length;i++){
    let charCode = s[i].charCodeAt(0)-x;
    charCode = 1 << charCode ;
    if(!(z&charCode)){
        z = z^charCode;
        s[j] = s[i];
        j++;
    }
}
console.log(s.join("").substr(0,j));
