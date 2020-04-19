class Heap{
    constructor(data){
        this._heap = [data];
    }

    parent(data){
        return Math.ceil(data/2)-1;
    }

    insert(data){
        this._heap.push(data);
        let child = this._heap.length-1;
        while(child > 0){
            if(this._heap[this.parent(child)] < data){
                [this._heap[this.parent(child)], this._heap[child]] = [this._heap[child], this._heap[this.parent(child)]];
                child = this.parent(child);
            }
            else{
                break;
            }
        }
    }
    
    maxHeapify(index){
        while(index <= Math.ceil((this._heap.length-1)/2)){
            let big = this._heap[2*index+1] > this._heap[2*index+2]?2*index+1:2*index+2;
            big = this._heap[big] > this._heap[index]?big:index;
            if(big == index){
                return;
            }
            else{
                [this._heap[big], this._heap[index]] = [this._heap[index], this._heap[big]];
                index = big;
            }
        }
    }

    pop(){
        let temp = this._heap[0];
        this._heap[0] = this._heap[this._heap.length-1];
        this._heap.splice(this._heap.length-1,1);
        this.maxHeapify(0);
        return temp;
    }

    print(){
        console.log("Heap is :",this._heap);
    }
}

let heap = new Heap(3);
heap.insert(10);
heap.insert(20);
heap.pop();
heap.insert(11);
heap.insert(2);
heap.print();
heap.pop();
heap.print();
