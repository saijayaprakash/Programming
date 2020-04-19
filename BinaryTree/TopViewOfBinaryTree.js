class Node{
    constructor(data){
        this._data = data;
        this._left = null;
        this._right = null;
        this._hd =0;
    }
}

class BinaryTree{
    constructor(data){
        this._root = new Node(data);
    }

    get root(){
        return this._root;
    }

    print(node){
        if(node == null){
            return;
        }
        console.log(node._data);
        this.print(node._left);
        this.print(node._right);
    }

    printTopView(){
        let que = [];
        let result_map = {};
        que.push(tree._root);
        while(que.length != 0){
            let x = que.shift();
            if(result_map[x._hd] == undefined){
                result_map[x._hd] = x._data;
            }
            if(x._left){
                x._left._hd = x._hd - 1;
                que.push(x._left);
            }
            if(x._right){
                x._right._hd = x._hd + 1;
                que.push(x._right);
            }
        }

        let res_keys = [];
        res_keys = Object.keys(result_map);
        res_keys.sort(function(a,b){
            return a-b;
        });

        for(let i in res_keys){
            console.log(result_map[res_keys[i]]);
        }
    }
}

let tree = new BinaryTree(1);
tree._root._left = new Node(2);
tree._root._left._right = new Node(4);
tree._root._left._right._right = new Node(5);
tree._root._left._right._right._right = new Node(7);
tree._root._left._left = new Node(6);
tree._root._right = new Node(3);
tree.printTopView();