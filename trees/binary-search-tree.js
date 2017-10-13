// BST is a type of binary trees. In BTS, left child nolde is less than its parent node and right child node is greater than parent node.

// First, let's create a BST, which is a constructor function:


function bst(val) {
    this.value = val;
    this.left = null;
    this.right = null;
}


// Now we have our parent node, or root, let's find a way to add nodes to the tree. Remember each child node is the parent of a new BST.

bst.prototype.insert = function (val) {
    if (value <= this.value) {
        if (!this.left) this.left = new bst(val);
        else this.left.insert(val);
    }
    else if (value > this.value) {
        if (!this.right) this.right = new bst(val);
        else this.right.insert(val);
    }
}

// insertion in BST run-time is O(log n).

// Here we created the insert function, which takes a value (the child), and compare it to the parent. If it's less than or equal to the parent, it should go to the parent's left branch. So we need to check if there is already a node there. If there is, access that node and call insert (recursion!) on that node. If not (hitting base case), add the new value and make a new BST. Same process for if the value is greater than the parent.

// Next, we check to see if the BTS contains a certain value.

bst.prototype.contains = function (val) {
    if (this.value === value) return true;
    if (value < this.value) {
        if (!this.left) return false;
        else return this.left.contains(val)
    }
    else if (value > this.value) {
        if (!this.right) return false;
        else return this.right.contains(val)
    }
}

// contains in BST run-time is also O(log n).

//Now let's traverse the entire tree, aka, visit every node. Two ways, depth-first and breadth-first. Depth-first travels one branch all the way to the bottom before moving on to the next, it starts on the left branch. 

bst.prototype.depthFirstTraversal = function (iteratorFunc, order) {
    
}