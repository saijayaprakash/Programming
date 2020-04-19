//Go To Last but one Node
//Take Min of two children and subtract it from current node
//Store the result in Max_Value if it is larger than that
//Send the min(current node, min(children)) in recursion
class Node{
    constructor(data){
        this._data = data;
        this._left = null;
        this._right = null;
    }
}
let maxDifference = Number.MIN_SAFE_INTEGER;
class BinaryTree{
    constructor(data){
        this._root = new Node(data);
    }

    maxDiff(node){
        if(node == null){
            return Number.MAX_SAFE_INTEGER;
        }
        if(node._left == null && node._right == null){
            return node._data;
        }
        let val = Math.min(this.maxDiff(node._left),this.maxDiff(node._right));
        maxDifference = Math.max(maxDifference,node._data-val);
        return Math.min(val,node._data);
    }
}

let tree = new BinaryTree(8);
tree._root._left = new Node(2);
tree._root._right = new Node(3);
tree._root._left._left = new Node(1);
tree.maxDiff(tree._root);
console.log("Maximum difference is :",maxDifference);