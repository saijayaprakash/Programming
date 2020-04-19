class Graph{
    constructor(nodes){
        this._graph = [];
        for(let i=0;i<nodes;i++){
            let temp = [];
            this._graph.push(temp);
        }
    }

    addEdge(a,b){
        this._graph[a].push(b);
        this._graph[b].push(a);
    }
}

function BFS(graph){
    let visited = [];
    for(let i=0;i<graph.length;i++){
        visited[i] = false;
    }

    let q = [];
    q.push(0);
    while(q.length !== 0){
        let ele = q.shift();
        visited[ele] = true;
        console.log(ele);
        let childs = graph[ele];
        while(childs.length>0){
            let x = childs.pop();
            if(!visited[x]){
                q.push(x);
            }
        }
    }
}

function DFS(graph){
    let visited = [];
    for(let i=0;i<graph.length;i++){
        visited[i] = false;
    }
    let stack = [];
    stack.push(0);
    
    while(stack.length>0){
        let ele = stack.pop();
        if(!visited[ele]){
            visited[ele] = true;
            console.log(ele);
        }
        let childs = graph[ele];
        while(childs.length>0){
            let x = childs.pop();
            if(!visited[x]){
                stack.push(x);
            }
        }
    }
    for(let i=0;i<graph.length;i++){
        if(!visited[i]){
            console.log(i);
        }
    }
}

function isTree(graph){
    let visited = [];
    for(let i=0;i<graph.length;i++){
        visited[i] = false;
    }

    let q = [];
    q.push(0);

    let parent = [];
    for(let i=0;i<graph.length;i++){
        parent[i] = 0;
    }

    while(q.length>0){
        let ele = q.pop();
        visited[ele] = true;
        let childs = graph[ele];
        while(childs.length>0){
            let child = childs.shift();
            if(!visited[child]){
                parent[child] = ele;
                q.push(child);
            }
            else {
                if(child != parent[ele]){
                    return false;
                }
            }
        }
    }

    for(let i=0;i<graph.length;i++){
        if(!visited[i]){
            return false;
        }
    }
    return true;
}

let g = new Graph(4);
g.addEdge(0,1);
g.addEdge(0,2);
g.addEdge(1,3);
g.addEdge(2,3);
// BFS(g._graph);
// DFS(g._graph);
if(isTree(g._graph)){
    console.log("Tree Tree !!");
}
else{
    console.log("Not a Tree NotTTT");
}