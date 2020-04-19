let str = "xaaax";

let max_length = 1;
let start_ind = 0;
for(let i=1;i<str.length;i++){
    
    //Odd Palindromes
    let low = i-1;
    let high = i+1;

    let cur_max = 0;
    while(low >=0 && high<= str.length){
        if(str[low] == str[high]){
            cur_max= high-low+1;
        }
        else{
            break;
        }
        low--;
        high++;
    }
    max_length = Math.max(max_length,cur_max);
    start_ind = (max_length == cur_max)?low+1:start_ind;

    //Even Palindromes
    low = i-1;
    high = i;
    cur_max = 0;
    while(low >= 0 && high < str.length){
        if(str[low] == str[high]){
            cur_max = high-low+1;
        }
        else{
            break;
        }
        low--;
        high++;
    }
    max_length = Math.max(max_length,cur_max);
    start_ind = (max_length == cur_max)?low+1:start_ind;
}

// str = str.substr(start_ind,max_length);
// console.log(str);
// console.log(max_length);

// ---------------------------->>>>> USING DYNAMIC PROGRAMMMING <<<<<<<<<<<<<<<-------------
// https://www.geeksforgeeks.org/longest-palindrome-substring-set-1/
str = "ababay";
barr = [];
for(let i=0;i<str.length;i++){
    barr.push([]);
    for(let j=0;j<str.length;j++){
        barr[i][j] = 0;
    }
}

for(let i=0;i<str.length;i++){
    barr[i][i] = 1;
    max_length =1;
}

for(let i=0;i<str.length;i++){
    if(str[i] == str[i+1]){
        barr[i][i+1] = 1;
        max_length = 2;
    }
}

for(let k=3;k<=str.length;k++){
    for(let i=0;i<=str.length-k;i++){
        if(str[i] == str[i+k-1] && barr[i+1][i+k-2]){
            barr[i][i+k-1] = 1;
            max_length = k; 
        }
    }
}

console.log(max_length);
for(let i=0;i<barr.length;i++){
    console.log(barr[i]);
}
