// var inorderTraversal = function (root) {
//     var a = [];
//     inorder(root, a);
//     return a;
// }

// function inorder(root, a) {
//     if (!root) return;

//     inorder(root.left, a);
//     a.push(root.val);
//     inorder(root.right, a);
// }

// using a stack
var inorderTraversal = function (root) {
    let stack = [],
        ans = [],
        curr = root;

    while (curr !== null || stack.length > 0) {
        while (curr !== null) {
            stack.push(curr);
            curr = curr.left
        }
        curr = stack.pop();
        ans.push(curr.val);
        curr = curr.right;
    }

    return ans;
}

/**
 * Thought process, go left until there's no more left. Then pop that and check 
 * to see if it has any right child. If no, look at its parent to see if it has 
 * any right child.


