let a = [3, 1, 4, 6, 5];

a.sort(function(a,b){
    return a-b;
});

a.map(function(val, ind, a){
    a[ind] = val*val;
});

for(let i=a.length-1;i>0;i--){
    l = 0;
    r = i-1;
    while(l<r){
        if(a[l]+a[r] === a[i]){
            console.log("Pythogorian Triplet",a[l],a[r],"--->",a[i]);
            return;
        }
        if(a[l]+a[r] > a[i]){
            r--;
        }
        else{
            l++;
        }
    }
}
console.log("Pythogorian Triplet Not Found");