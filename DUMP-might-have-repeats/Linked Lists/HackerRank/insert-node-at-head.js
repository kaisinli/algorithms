function insert(head, data) {
    var newNode = new Node(data);

    if (head === null) {
        head = newNode;
    } else {
        newNode.next = head;
        head = newNode;
    }
    return head;
}
