function addTwoNumbers(l1, l2) {
    let carry = 0,
        node = null,
        newList;

    while (l1 || l2 || carry) {
        let val1 = l1 ? l1.val : 0,
            val2 = l2 ? l2.val : 0,
            newVal = val1 + val2 + carry,
            newNode = new ListNode(newVal % 10);

        carry = Math.floor(newVal / 10);

        if (node) {
            node.next = newNode;
            node = node.next;
        } else {
            node = newNode;
            newList = node;
        }

        l1 = l1 && l1.next;
        l2 = l2 && l2.next;
    }

    return newList;
}
