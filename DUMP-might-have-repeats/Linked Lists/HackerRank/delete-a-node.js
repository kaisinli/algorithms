function deleteNode(head, position) {
    if (position === 0) {
        head = head.next;
    }else{
        var counter = 1;
        var node = head;      
        
        while(node.next){
            if(counter === position){
                node.next = node.next.next;
                break;
            };        
            node = node.next;
            counter++;
        }
    }
    return head;
}
