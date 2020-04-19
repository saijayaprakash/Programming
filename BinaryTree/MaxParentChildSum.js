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
        this._max = Number.MIN_SAFE_INTEGER;
    }

    maxParentChildSum(node){
        if(node == null){
            return 0;
        }
        
        let res = Number.MIN_SAFE_INTEGER;
        if(node._left != null && node._right != null){
            res = node._data + node._left._data + node._right._data;
        }
        this._max = Math.max(this._max,res);

        this.maxParentChildSum(node._left);
        this.maxParentChildSum(node._right);
        return this._max;
    }
}

let tree = new BinaryTree(15);
tree._root._left = new Node(16);
tree._root._left._left = new Node(8);
tree._root._left._left._left = new Node(55);
tree._root._left._right = new Node(67);
tree._root._left._right._left = new Node(44);
tree._root._right = new Node(17);
tree._root._right._left = new Node(7);
tree._root._right._left._right = new Node(11);
tree._root._right._right = new Node(41);
console.log(tree.maxParentChildSum(tree._root));