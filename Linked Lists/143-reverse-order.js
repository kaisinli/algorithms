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

    l2 = reverseList(l2);

    listInterleave(l1, l2)
};

const reverseList = function (head) {
    let pre = null,
        curr = head,
        temp = curr;

    while (curr !== null) {
        temp = curr;
        curr = curr.next;
        temp.next = pre;
        pre = temp;
    }
}

const listInterleave = function (l1, l2) {
    let curr = l1,
        temp = curr;

    while (l2 !== null) {
        temp = curr;
        temp.next = l2;
        l2 = l2.next;
        

    }
}