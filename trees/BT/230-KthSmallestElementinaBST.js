const kthSmallest = function (root, k) {
    let arr = [],
        sortedArr = inOrderTrav(root, arr);
        
    return sortedArr[k-1]    
};

const inOrderTrav = (root, arr) => {
    if (!root) return;

    inOrderTrav(root.left, arr);
    arr.push(root.val);
    inOrderTrav(root.right, arr);

    return arr;
}