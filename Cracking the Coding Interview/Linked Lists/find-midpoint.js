function findMiddle(node) {
    var fast = node;
    var slow = node;

    while (fast != null && fast.next != null) {
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow;
}

/**
 * fast is traveling twice as fast 
 * if the linked list has an even number of node, the midpoint will be the first element of the second half.
 * 
 * Examples:
 * 
 * 0>1>2>3>4 ==> 2
 * ------------------------
 * iteration   slow  slow.next  fast  fast.next  fast.next.next
 *     0         0        1       0       1             2
 *     1         1        2       2       3             4
 *     2         2        3       4      null         null   
 * 
 * There won't be a third iteration because fast.next is null. So midpoint is slow(2)
 * 
 * 
 * 0>1>2>3 ==> 1 
 * ------------------------
 * iteration   slow  slow.next  fast  fast.next  fast.next.next
 *     0         0        1       0       1             2
 *     1         1        2       2       3           null
 *     2         2        3      null    null         null
 * 
 * There won't be a third iteration because fast and fast.next are null. So midpoint is slow(2)
 *    
 */
