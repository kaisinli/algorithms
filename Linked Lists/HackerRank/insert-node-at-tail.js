function insert(head, data) {
    var node = head;
    var newNode = new Node(data);

    if(node === null) {
        head = newNode;      
    } else {
        while(node.next !== null){
            node = node.next
        }
        node.next = newNode;
    }
 
    return head;
}
