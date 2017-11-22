/**
 * remove dups from a linked list
 */

var Node = function (value) {
    this.value = value;
    this.next = null;
};

var removeDup = function (head) {
    const hash = {};
    hash[head] = 1;

    var currNode = head;
    var nextNode = head.next;

    var temp = new Node;

    while (nextNode) {
        if (hash[nextNode.value] === undefined) {
            hash[nextNode.value] = 1;
            currNode = nextNode;
            nextNode = nextNode.next;
        } else{
            currNode.next = nextNode.next;
            nextNode = currNode.next
        }
    }
};