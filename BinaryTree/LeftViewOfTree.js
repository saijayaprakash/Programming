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
        this._max_level = -1;
    }

    printLeftView(node,level){
        if(node == null){
            return;
        }
        if(this._max_level < level){
            console.log(node._data);
            this._max_level = level;
        }
        this.printLeftView(node._left,level+1);
        this.printLeftView(node._right,level+1);
    }
}

let tree = new BinaryTree(1);
tree._root._left = new Node(2);
tree._root._right = new Node(5);
tree._root._right._right = new Node(6);
tree._root._right._right._left = new Node(7);
tree._root._left._left = new Node(3);
tree._root._left._right = new Node(4);
tree.printLeftView(tree._root,0);