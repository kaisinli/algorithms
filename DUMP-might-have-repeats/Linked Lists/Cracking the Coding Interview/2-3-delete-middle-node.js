// delete a node in the middle of a singly ll

const deleteNode = (node) => {
    if (node === null || node.next === null) {
        return false;
    }

    // think of it as, insteading of actually removing the node, reset the node:
    var temp = node.next;
    node.data = temp.data;
    node.next = temp.next;
    return true;
}

