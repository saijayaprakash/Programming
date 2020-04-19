class Node{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}
class BinaryTree{
    constructor(data){
        this.root = new Node(data);
    }

    sumUpATree(node){
        if(node == null){
            return 0;
        }
        let child_sum = this.sumUpATree(node.left)+this.sumUpATree(node.right);
        let total_sum = child_sum + node.data;
        node.data = child_sum;
        return total_sum;
    }
}

function printTree(node){
    if(node == null){
        return 0;
    }
    printTree(node.left);
    console.log(node.data);
    printTree(node.right);
}

let tree = new BinaryTree(1);
tree.root.left = new Node(2);
tree.root.right = new Node(3);
tree.root.left.left = new Node(4);
console.log(tree.sumUpATree(tree.root));
printTree(tree.root);