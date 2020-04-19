//Push All the Nodes into Stack
//If the stack size increases by 3 check for last 3 elements > max_sum
//If Yes Print & finally pop the stack [Cleaning purpose].
class Node {
    constructor(data){
        this._data = data;
        this._left = null;
        this._right = null;
    }
}

class BinaryTree{
    constructor(data,max){
        this._root = new Node(data);
        this._max = max;
        this._stack = [];
        this._count = 0;
    }

    findTripletSum(node){
        if(node == null){
            return 0;
        }
        this._stack.push(node._data);
        let sum;
        let stack_length = this._stack.length;
        if(stack_length>=3){
            sum = this._stack[stack_length-1]+this._stack[stack_length-2]+this._stack[stack_length-3];
            if(sum > this._max){
                this._count++;
                console.log(this._stack[stack_length-1],"-->",this._stack[stack_length-2],"-->",this._stack[stack_length-3]);
            }
        }
        this.findTripletSum(node._left);
        this.findTripletSum(node._right);
        this._stack.pop();
        return this._count;
    }
}

let tree = new BinaryTree(1,8);
tree._root._left = new Node(2);
tree._root._right = new Node(3);
tree._root._left._left = new Node(4);
tree._root._left._left._left = new Node(1);
tree._root._left._right = new Node(6);
tree._root._left._right._right = new Node(2);
tree._root._right._right = new Node(9);
console.log("Numbe of Triplets :",tree.findTripletSum(tree._root));