var allPathsSourceTarget = module.exports = function (graph) {
    var res = [];
    var path = [];

    path.push(0);

    dfsSearch(0);

    function dfsSearch(node) {

        if (node == graph.length - 1) {
            res.push(path.slice(0));
        } else {
            for (nextNode of graph[node]) {
                path.push(nextNode);
                dfsSearch(nextNode);
                //now we go back one level to look at another nextNode 
                path.pop();
            }
        }
    }
    return res;
};