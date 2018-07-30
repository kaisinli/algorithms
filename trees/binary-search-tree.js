// BST is a type of binary trees. In BTS, left child node is less than its parent node and right child node is greater than parent node.

// First, let's create a BST, which is a constructor function:

function BST(val) {
    this.value = val;
    this.left = null;
    this.right = null;
}


// Now we have our parent node, or root, let's find a way to add nodes to the tree. Remember each child node is the parent of a new BST.

BST.prototype.insert = function (val) {
    if (val <= this.value) {
        if (!this.left) this.left = new BST(val);
        else this.left.insert(val);
    }
    else if (val > this.value) {
        if (!this.right) this.right = new BST(val);
        else this.right.insert(val);
    }
}

// insertion in BST run-time is O(log n).

// Here we created the insert function, which takes a value (the child), and compare it to the parent. 
// If it's less than or equal to the parent, it should go to the parent's left branch. 
// So we need to check if there is already a node there. If there is, access that node and call insert (recursion!) on that node. 
// If not (hitting base case), add the new value and make a new BST. Same process for if the value is greater than the parent.

// Next, we check to see if the BTS contains a certain value.

BST.prototype.contains = function (val) {
    if (this.value === val) return true;
    if (val < this.value) {
        if (!this.left) return false;
        else return this.left.contains(val)
    }
    else if (val > this.value) {
        if (!this.right) return false;
        else return this.right.contains(val)
    }
}

// contains in BST run-time is also O(log n).

// Now let's traverse the entire tree, aka, visit every node. 
// Two ways, depth-first and breadth-first. 
// Depth-first travels one branch all the way to the bottom before moving on to the next, it starts on the left branch. 

/**
 * Depth-first search method:
 * 
 * pre-order:   hits the current node data before traversing both left and right subtrees
 * in-order:    hits the current node data after traversing the left subtree but before the right subtree
 * post-order:  hits the current node data after traversing both left and right subtrees
 * 
 * We need to pass in an iteratorFunc that can take action on each node as we traverse the tree. It can just log for now.
 */

const log = (val) => {
    console.log(val)
}

BST.prototype.depthFirstTraversal = function (iteratorFunc, order) {
    if (order === 'preOrder') iteratorFunc(this.value);
    if (this.left) this.left.depthFirstTraversal(iteratorFunc,order);
    if (order === 'inOrder') iteratorFunc(this.value);
    if (this.right) this.right.depthFirstTraversal(iteratorFunc,order);
    if (order === 'postOrder') iteratorFunc(this.value);
}

/**
 * Breadth-first search method:
 * 
 * Traverse each level of the tree systematically before moving on to the next level of the tree. This is a queue, since the parents are visited before its children
 */

BST.prototype.breadthFirstTraversal = function (iteratorFunc) {
    let queue = [this];
    while (queue.length) {
        let parentNode = queue.shift();
        iteratorFunc(parentNode);
        if(parentNode.left) queue.push(parentNode.left);
        if(parentNode.right) queue.push(parentNode.right);
    }
}

// find max/min

BST.prototype.getMinOrMax = function (option) {
    if (option === 'min') {
        if(!this.left) return this.value;
        else return this.left.getMinOrMax(option);
    } 
    else if (option === 'max') {
        if(!this.right) return this.value;
        else return this.right.getMinOrMax(option);
    }
}

// let's test our BST!

let newTree = new BST(4)

newTree.insert(3)
newTree.insert(5)
newTree.insert(2)
newTree.insert(8)
newTree.insert(1)
newTree.insert(7)