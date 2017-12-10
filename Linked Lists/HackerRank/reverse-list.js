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