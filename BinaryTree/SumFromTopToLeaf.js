//Q -- Sum of all the numbers that are formed from root to leaf paths
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

    findSumToptoLeaf(node,val){
        if(node == null){
            return 0;
        }
        val = val*10 + node._data;
        if(node._left == null  && node._right == null){
            return val;
        }
        return this.findSumToptoLeaf(node._left,val) + this.findSumToptoLeaf(node._right,val);
    }
}

let tree = new BinaryTree(6);
tree._root._left = new Node(3);
tree._root._right = new Node(5);
tree._root._left._left = new Node(2);
tree._root._left._right = new Node(5);
tree._root._left._right._left = new Node(7);
tree._root._left._right._right = new Node(4);
tree._root._right._right = new Node(4);

console.log(tree.findSumToptoLeaf(tree._root,0)); // O/P : 13997 


// There are 4 leaves, hence 4 root to leaf paths:
//    Path                    Number
//   6->3->2                   632
//   6->3->5->7               6357
//   6->3->5->4               6354
//   6->5>4                    654   
// Answer = 632 + 6357 + 6354 + 654 = 13997 