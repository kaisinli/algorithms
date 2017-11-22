// singly LL

function reverseList(node) {
    if (node === null || node.next === null) return node;
    var prev = null;
    var cur = node;
    var temp;
    while (cur !== null) {
        temp = cur;
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
 *    
 *   after x iteration         prev      cur        temp     
 *          0                  null     01234       null
 *          1                     0        1234      0
 *          2                    10        234       10
 *          3                   210        34        210
 *          4                  3210         4        3210
 *          5                 43210      null        43210
 *
 * 
 * Steps: 
 * 1. make a copy of current node
 * 2. move node of interest (cur) to the next one: cur = cur.next;
 * 3. now, working with the copy (temp), set the head of the copy to point to prev:  temp.next = prev;
 * 4. prev is temp, which we will need to reference in the next iteration
 * 
 * 
 * /

// ------------------------------------------------------------------------------------------------------------------------



