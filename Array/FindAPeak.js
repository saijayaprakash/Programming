//Find any peak Element 
//Do a binary search -- Solution will come 
//Tried With different cases for Binary Search
let arr = [10,11,2,0,-1,30];
let l = 0;
let h = arr.length-1;
while(l<=h){
    let mid = Math.round((l+h)/2);
    if(isPeak(arr[mid],mid)){
        console.log(mid);
        break;
    }
    else{
        if(arr[mid]<arr[mid+1]){
            l = mid+1;
        }
        else{
            h = mid-1;
        }
    }
}

function isPeak(val,ind){
    if(ind == 0){
        if(arr[ind+1]<= arr[0]){
            return true;
        }
    }
    else if(ind == arr.length-1){
        if(arr[ind] >= arr[ind-1]){
            return true;
        }
    }
    else{
        if(arr[ind]>= arr[ind+1] && arr[ind] >= arr[ind-1]){
            return true;
        }
    }
    return false;
}