var reorderList = function (head) {
    //find midpoint with two pointer method
    let fast = head,
        slow = head;

    while (fast !== null && fast.next !== null) {
        fast = fast.next.next;
        slow = slow.next;
    }

    let l1 = head,
        l2 = slow.next;
    slow.next = null;

    
};

const reverseList = function (head) {
    let pre = null,
        curr = head;
}

const listInterleave = function (l1, l2) {

}