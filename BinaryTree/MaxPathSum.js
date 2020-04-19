class Node{
    constructor(data){
        this._data = data;
        this._left = null;
        this._right = null;
    }
}

class BinaryTree{
    constructor(data){
        this._root = new Node(data);
        this._result = Number.MIN_SAFE_INTEGER;
    }

    findMaxPathSum(node){
        if(node == null){
            return 0;
        }
        let l = this.findMaxPathSum(node._left);
        let r = this.findMaxPathSum(node._right);

        let max_single = Math.max(Math.max(l,r)+node._data,node._data);
        let max_sum = Math.max(l+r+node._data,max_single);

        this._result = Math.max(max_sum,this._result);
        return max_single;
    }
}

let tree = new BinaryTree(10);
tree._root._left = new Node(2);
tree._root._right = new Node(10);
tree._root._left._left = new Node(20);
tree._root._left._right = new Node(1);
tree._root._right._right = new Node(-25);
tree._root._right._right._left = new Node(3);
tree._root._right._right._right = new Node(4);
tree.findMaxPathSum(tree._root);
console.log("Max Path Sum:",tree._result);