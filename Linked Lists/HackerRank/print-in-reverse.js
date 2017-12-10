function reversePrint(head) {
    var arr = [];
    var node = head;
    while(node){
        arr.unshift(node.data);
        node = node.next;
    };
    
    for(var i = 0; i<arr.length; i++){
        console.log(arr[i])
    }
}
