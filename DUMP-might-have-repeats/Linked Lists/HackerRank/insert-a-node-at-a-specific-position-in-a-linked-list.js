function insert(head, data, position) {
    var newNode = new Node(data);
    
    if (position === 0) {
        newNode.next = head;
        head = newNode;
    } else {
        var counter = 1;
        var node = head;
    
        while (node) {
            if( counter === position) {
                newNode.next = node.next;
                node.next = newNode;
                break;
            }
            
            node = node.next;
            counter ++;
        }
    }   
    return head;
}