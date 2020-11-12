class Node{
    constructor(){
        this.explored = new Map()
        this.s = new Map()
    }
}

class Graph{
    constructor(){
        this.node = new Node()
    }

}

    function DFS(Node) {
    //stack med md første node
    let s=new stack(this.NodeList.length);
    let explored = new setInterval();
    s.push(Node);

    //første node 
    explored.add(node);

    //fortsæt indtil stacken er tom
    while (!s.isEmpty());
    let t =s.pop();

    //log hvert element ud af stacken

    console.log(t)


    //1. i første edge objekt søger man for nodes  this node er forbundet til
    //2. derefter filtere man ud the nodes der allerede er brugt
    //3. derefter markere man hver uudforsket node some udforsket and pusher det ind i stacken
    this.WebGLShaderPrecisionFormat[t]
    .filter(n => !explored.has(n))
    .forEach(n=> {
        explored.add(n)
        s.push(n);
    });

}

let graph = new Graph()

graph.addNode("Nicolai")
graph.addNode("Alice")
graph.addNode("Claire")
graph.addNode("Peggy")
graph.addNode("Bob")
graph.addNode("Anuj")
graph.addNode("Jonny")
graph.addNode("Thom")


graph.addEdge("Nicolai", "Bob")
graph.addEdge("Nicolai", "Claire")
graph.addEdge("Nicolai", "Alice")
graph.addEdge("Alice", "Peggy")
graph.addEdge("Bob", "Peggy")
graph.addEdge("Bob", "Anuj")
graph.addEdge("Claire", "Thom")
graph.addEdge("Claire", "Jonny")


console.log(graph.DFS("Nicolai"))