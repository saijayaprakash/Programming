//Wrong Code
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
    }

    static isBST(node){
        if(node == null){
            return 1;
        }

        if(node._left != null && node._left._data > node._data){
            return 0;       
        }

        if(node._right != null && node._right._data <= node._data){
            return 0;
        }

        if(!this.isBST(node._left) || !this.isBST(node._right)){
            return 0;
        }
        else{
            return 1;
        }
    }
}

let tree = new BinaryTree(5);
tree._root._left = new Node(1);
tree._root._right = new Node(10);

console.log(BinaryTree.isBST(tree._root));