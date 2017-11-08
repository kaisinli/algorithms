// singly LL

function reverseList(node) {
    if (node === null || node.next === null) return node;
    var prev = null;
    var cur = node;
    while (cur !== null) {
        var temp = cur;
        cur = cur.next;
        temp.next = prev;
        prev = temp;
    }
    return prev;
}

/**
 * 
 * Examples:
 * 
 * 0>1>2>3>4 ==> 4>3>2>1>0
 * ------------------------
 * What we want to do here is basically to flip the direction of the LL. 
 * In other words, whatever the .next of a node is is its .prev. Since
 * this is a singly LL, there is no .prev so we need to keep track of the
 * node's previous node with temp
 *    
 */

// ------------------------------------------------------------------------------------------------------------------------



