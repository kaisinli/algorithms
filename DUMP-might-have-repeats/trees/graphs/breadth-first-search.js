const graphBFS = (graph, root) => {
    let nodeDist = {},
        current = 0,       // current is the node we are currently traversing
        queue = [root];    // queue is the nodes still needed to be travered


    // initialializing nodeDist, setting every node's distance to root is Infinity
    for (let i = 0; i < graph.length; i++) {
        nodeDist[i] = Infinity;
    }

    // root's distance to itself is 0
    nodeDist[root] = 0;

    // as long as there is still nodes to be traversed... queue.length
    while (queue.length) {
        current = queue.shift();                           
        let currentNodeRow = graph[current],
            nodeChildren = [],

            // find node's first child
            childNode = currentNodeRow.indexOf(1);
        
        // if node HAS children nodes, push that node into children array, and look for the next children
        while (childNode !== -1) {
            nodeChildren.push(childNode);
            childNode = currentNodeRow.indexOf(1, childNode + 1);
        }

        // now that we have an array of all the nodes children, add the distance of that children node to root by 1 and push the chldren into the queue. 
        // on the next loop in the while loop on line 16, current will become one of these children
        for (let j = 0; j < nodeChildren.length; j++) {
            if (nodeDist[nodeChildren[j]] === Infinity) {
                nodeDist[nodeChildren[j]] = nodeDist[current] + 1;
                queue.push(nodeChildren[j])
            }
        }
    }

    // this function returns an obj of all the distance of all the nodes to the root
    return nodeDist;
};

let graph = [
    [0, 1, 1, 1, 0],
    [0, 0, 1, 0, 0],
    [1, 1, 0, 0, 0],
    [0, 0, 0, 1, 0],
    [0, 1, 0, 0, 0]
];

graphBFS(graph, 1);
