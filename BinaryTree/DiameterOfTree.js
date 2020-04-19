//@uthor Iaj
//Find Height of left sub-tree & right sub-tree
//Calculate Root-Diameter = left height + right height + 1(Root)
//Compare Root-diameter with Max(left-subtree-diameter , right-sub-tree-diameter)
class Node{
    constructor(data){
        this._data = data;
        this._left = null;
        this._null = null;
    }
}

class BinaryTree{
    constructor(data){
        this._root = new Node(data);
        return this._root;
    }

    getRoot(){
        return this._root;
    }

    static diameter(node){
        if(node == null){
            return 0;
        }
        let lheight = this.height(node._left);
        let rheight = this.height(node._right);

        return Math.max(lheight+rheight+1,Math.max(this.diameter(node._left),this.diameter(node._right)));
    }

    static height(node){
        if(node == null){
            return 0;
        }
        else{
            return 1+Math.max(this.height(node._left),this.height(node._right));
        }
    }

    static main(){
        var root = new BinaryTree(1);
        root._left = new Node(2);
        root._right = new Node(3);
        root._right._left = new Node(4);
        root._right._right = new Node(5);
        root._right._right._left = new Node(6);
        console.log("The Diameter of tree :",this.diameter(root));
    }
}
BinaryTree.main();

