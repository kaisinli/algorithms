function hasPathWithGivenSum(t, s) {

    // if we've reached the leaf, check to see if s has reached 0
    if (t === null) {
        if (s === 0) { return true; } 
        else { return false }
    }

    // if node has both children still, go down both path to see if it'll return true. Subtract the sum by the current node value 
    if (t.right !== null && t.left != null)
        return hasPathWithGivenSum(t.right, s - t.value) || hasPathWithGivenSum(t.left, s - t.value);

    // if there is only the left child left, go down the left path. if there is only the right child left, go down the right path. 
    if (t.left !== null) {
        return hasPathWithGivenSum(t.left, s - t.value);
    } else {
        return hasPathWithGivenSum(t.right, s - t.value);
    }
}