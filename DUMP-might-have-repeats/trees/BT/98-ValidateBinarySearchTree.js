const isValidBST = function(root) {
    if (!root) return true;
    
    let arr = [];
    
    inOrderTrav(root, arr);
    
    for (let i=1;i<arr.length;i++){
        if (arr[i]<=arr[i-1]) return false;
    }
    
    return true;
   
};

const inOrderTrav = (root, arr) => {
    if(!root) return;

    inOrderTrav(root.left, arr);
    arr.push(root.val);
    inOrderTrav(root.right, arr);
    
    return arr;
}