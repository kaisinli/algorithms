// function removeKFromList(l, k) {
//     var curr = l;
//     var prev = null;
//     var temp = null;

//     while (curr) {
//         // if the value is k
//         if (curr.value === k) {     
//             // check to see if this node is the head of the list
//             if (!prev) {
//                 // if it is, no previous node, then the list now starts on the next node
//                 temp = curr;
//                 curr.next = null;
//                 curr = temp.next;
//                 l = curr;
//             } else {
//                 // if it isn't the head, then the node's previous node points directly to its next node
//                 prev.next = curr.next;
//                 curr = curr.next;
//             }
//         } else {
//             //
//             prev = curr;
//             curr = curr.next;
//         }
//     }
//     return l;
// }

function removeKFromList(l, k) {
    var curr = l;
    var prev = null;

    while (curr) {
        // if the value is k
        if (curr.value === k) {     
            // check to see if this node is the head of the list
            if (!prev) {
                // if it is, no previous node, then the list now starts on the next node
                l = curr.next;
            } else {
                // if it isn't the head, then the node's previous node points directly to its next node
                prev.next = curr.next;
            }
        } else {
            //
            prev = curr;
        }
        curr = curr.next;
    }
    return l;
}
