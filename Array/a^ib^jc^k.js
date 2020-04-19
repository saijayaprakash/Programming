let s = "aabc";

function maxSubsequences(s){
    let aCount = 0, bCount = 0, cCount = 0;
    s = s.split("");
    for(let i=0;i<s.length;i++){
        if(s[i] == 'a'){
            aCount = 1 + 2*aCount;
        }
        if(s[i] == 'b'){
            bCount = aCount + 2*bCount;
        }

        if(s[i] == 'c'){
            cCount = bCount + 2*cCount;
        }
    }
    return cCount;
}

console.log(maxSubsequences(s));