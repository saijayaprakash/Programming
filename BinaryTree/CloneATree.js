class Node{
    constructor(data,left = null,right = null, random = null){
        this._data = data;
        this._left = left;
        this._right = right;
        this._random = random;
    }
}

class BinaryTree{
    constructor(data){
        this._root = (data)?new Node(data):null;
    }
}

let map = {};
function copyLeftRight(newNode, oldNode){
    if(oldNode == null){
        return null;
    }
    newNode._left = (oldNode._left)?new Node(oldNode._left._data):null;
    newNode._right = (oldNode._right)?new Node(oldNode._right._data):null;
    map[oldNode._data] = newNode;
    copyLeftRight(newNode._left,oldNode._left);
    copyLeftRight(newNode._right,oldNode._right);
}

function printTree(node){
    if(node == null){
        return;
    }
    printTree(node._left);
    console.log(node._data);
    printTree(node._right);
}

function copyRandom(newNode, oldNode){
    if(newNode == null)
        return;
    newNode._random = (oldNode._random)?map[oldNode._random._data]:null;
    copyRandom(newNode._left, oldNode._left);
    copyRandom(newNode._right, oldNode._right);
}

function cloneTree(oldTree){
    let newTree = new BinaryTree(oldTree._root._data);
    copyLeftRight(newTree._root,oldTree._root);
    copyRandom(newTree._root, oldTree._root);
    printTree(newTree._root);
}

let tree = new BinaryTree(1);
tree._root._left = new Node(2);
tree._root._right = new Node(3);
tree._root._random = tree._root._left._left = new Node(4);
cloneTree(tree);