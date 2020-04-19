class MinHeap{
    constructor(data){
        this._heap = [data];
    }

    parent(index){
        return Math.floor((index+1)/2-1);
    }

    insert(data){
        this._heap.push(data);
        let index = this._heap.length-1;
        while(index!=0 && this._heap[this.parent(index)] > this._heap[index]){
            [this._heap[this.parent(index)],this._heap[index]] = [this._heap[index], this._heap[this.parent(index)]];
            index = this.parent(index);
        }
    }

    minHeapify(index){
        let small;
        do{
            small = (this._heap[index] > this._heap[index*2+1])?index*2+1:index;
            small = (this._heap[small] > this._heap[index*2+2])?index*2+2:small;
            [this._heap[small],this._heap[index]] = [this._heap[index],this._heap[small]];
            index = small;
        }while(index <= Math.floor((this._heap.length)/2) && index!=small);
    }

    pop(){
        if(this._heap.length){
            let x = this._heap[0];
            [this._heap[0], this._heap[this._heap.length-1]] = [this._heap[this._heap.length-1], this._heap[0]];
            this._heap.splice(this._heap.length-1,1);
            this.minHeapify(0);
            return x;
        }
        return 0;
     }

    print(){
        console.log(this._heap);
    }
}

let arr = [2,1,4,3,7];
let heap = new MinHeap(arr[0]);
for(let i=1;i<arr.length;i++){
    heap.insert(arr[i]);
}
while(heap._heap.length > 2){
    let x = heap.pop();
    let y = heap.pop();
    heap.insert(x+y);
}
console.log("Min Cost is :",heap._heap[0]+heap._heap[1]);
