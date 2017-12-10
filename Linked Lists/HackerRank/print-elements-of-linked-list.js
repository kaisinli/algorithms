function print(head) {
    var node = head;
    while(node){
        console.log(node.data)
        node = node.next;
    }
}