//@uthor Iaj
//Fill Horizontal and Vertical Matrices
//Start from bottom-right
//Find Min from Hor and Ver matrices
//Find For a square
let x = [
    [1,0,1,1,1],
    [1,1,1,0,1],
    [0,0,1,1,1],
    [0,0,1,0,1]
];
let hor = [];
let ver = [];
let counter = 0;

for(let i=0;i<x.length;i++){
    let arr = [];
    hor.push(arr);
}
for(let i=0;i<x.length;i++){
    let arr = [];
    ver.push(arr);
}

for(let i=0;i<x.length;i++){
    for(let j=0;j<x[0].length;j++){
        if(x[i][j] === 1){
            counter++;
        }
        else{
            counter = 0;
        }
        hor[i][j] = counter;
    }
    counter = 0;
}

for(let j=0;j<x[0].length;j++){
    for(let i=0;i<x.length;i++){
        if(x[i][j] === 1){
            counter++;
        }
        else{
            counter = 0;
        }
        ver[i][j] = counter;
    }
    counter = 0;
}
let max = 0;
let coor = [];
for(let i=x.length-1;i>=0;i--){
    for(let j=x[0].length-1;j>=0;j--){
        if(hor[i][j]!=0){
            let min = Math.min(hor[i][j],ver[i][j]);
            if(hor[i][j] >= min && hor[i-min+1][j] >= min && ver[i][j]>=min && ver[i][j-min+1]>=min){
                if(max < min){
                    max = min;
                    coor[0] = i-min+1;
                    coor[1] = j-min+1;
                }
            }
        }
    }
}
console.log("Horizontal :");
for(let i=0;i<x.length;i++)
    console.log(hor[i]);
console.log("Vertical :");    
for(let i=0;i<x.length;i++)
    console.log(ver[i]);
console.log("The Original Matrix:");
for(let i=0;i<x.length;i++)
    console.log(x[i]);
console.log("The Maximum",max);
console.log("The coordinates",coor);