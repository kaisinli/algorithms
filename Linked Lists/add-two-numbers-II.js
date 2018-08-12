const addTwoNumbers = function (l1, l2) {
    let node1 = reverseList(l1),
        node2 = reverseList(l2),
        carry = 0,
        newList = null,
        node = null;

    while (node1 && node2) {
        let val = node1.val + node2.val;

        if (node) {
            node.next = new ListNode((val + carry) % 10);
            node = node.next;
        } else {
            node = new ListNode((val + carry) % 10);
            newList = node;
        }

        carry = 0;
        if (val >= 10) carry++;
        node1 = node1.next;
        node2 = node2.next;
    }

    console.log('CARRY: ', carry)

    if (node1) {
        node1.val = node1.val + carry;
        node.next = node1;
    } else if (node2) {
        node2.val = node2.val + carry;
        node.next = node2;
    } else if (carry > 0) {
        let newHeadNode = new ListNode(carry);
        newList.next = newHeadNode
    }

    return reverseList(newList)
};

const reverseList = (node) => {
    let cur = node,
        prev = null,
        temp = null;

    while (cur !== null) {
        temp = cur;
        cur = cur.next;
        temp.next = prev;
        prev = temp
    }

    return prev
}