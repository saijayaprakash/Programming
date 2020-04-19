// Design a stack that supports getMin() & getMax() in O(1) time and O(1) extra space
class stack{
    constructor(data){
        this.data  = [data];
        this.min = data;
    }

    push(data){
        if(data < this.min){
            let temp = this.min;
            this.min = data;
            data = 2*data-temp;
        }
        this.data.push(data);
    }

    pop(){
        if(this.data[this.data.length-1] < this.min){
            this.min = this.data[this.data.length-1] = this.min*2-this.data[this.data.length-1];
        }
        let returnVal = this.data[this.data.length-1];
        this.data.splice(this.data.length-1,1);
        return returnVal;
    }
}

let x = new stack(4);
x.push(2);
x.push(5);
// console.log(x.pop());
console.log(x.min);