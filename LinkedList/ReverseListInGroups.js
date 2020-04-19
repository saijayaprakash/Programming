class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class LinkedList{
    constructor(data){
        this.head = new Node(data);
    }
}

function printList(node){
    let temp = node;
    while(temp != null){
        console.log(temp.data);
        temp = temp.next;
    }
}

function reverseList(node){
    let temp_node = node;
    let prev = null;
    let next = null;
    while(temp_node!= null){
        next = temp_node.next;
        temp_node.next = prev;
        prev = temp_node;
        temp_node = next;
    }
    list.head = prev;
}

function reverseListkTimes(node, k){
    let cur_node = node;
    let prev = null;
    let next = null;
    let count = 0;
    while(cur_node != null && count<k){
        count++;
        next = cur_node.next;
        cur_node.next = prev;
        prev = cur_node;
        cur_node = next;
    }

    if(cur_node!= null){
        node.next = reverseListkTimes(cur_node ,k);
    }

    return prev;
}


let list = new LinkedList(1);
list.head.next = new Node(2);
list.head.next.next = new Node(3);
list.head.next.next.next = new Node(4);
list.head.next.next.next.next = new Node(5);
list.head.next.next.next.next.next = new Node(6);

printList(reverseListkTimes(list.head,4));
// console.log(list);

