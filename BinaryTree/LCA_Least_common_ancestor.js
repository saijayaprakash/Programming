//if n1 || n2 present in Present node send Present_node
//recurse left_lca && right_lca
//if(left_lca && right_lca != null) return Present_data
//if(left_lca == null) return right_lca else left_lca

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

    findLca(node,n1,n2){
        if(node == null){
            return null;
        }
        if(node._data == n1 || node._data == n2){
            return node;
        }

        let left_lca = this.findLca(node._left,n1,n2);
        let right_lca = this.findLca(node._right,n1,n2);

        if(left_lca != null && right_lca != null){
            return node;
        }

        return (left_lca!=null)?left_lca:right_lca;
    }
}

let tree = new BinaryTree(1);
tree._root._left = new Node(2);
tree._root._right = new Node(3);
tree._root._left._left = new Node(4);
tree._root._right._left = new Node(5);
tree._root._right._right = new Node(6);
let result_node = tree.findLca(tree._root,3,6);
console.log(result_node._data);