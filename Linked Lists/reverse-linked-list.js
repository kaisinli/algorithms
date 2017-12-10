// singly

function reverseLinkedList(head) {
    // the LL is null or there is only one node in the list, return head
    if (head === null || head.next === null) {
        return head;
    };
    
    //need to keep trak of the previous node
    var prev = null;
    var node = head;
    var temp = null;
    
    while (node !== null) {
        // keep track of the node we are looking at
        temp = node;
        
        // the next node we are looking at
        node = node.next;
        
        // whatever I processed before, it is now my next node
        temp.next = prev;  
        
        // |
        // v
        
        // now this temp is my prev to the next node I process
        prev = temp;
    }
    return prev;
}

//   after x iteration         prev      node        temp     
//          0                  null     01234        null
//          1                     0        1234      01234
//          2                    10        234       1234
//          3                   210        34        234
//          4                  3210         4        34
//          5                 43210      null        4




