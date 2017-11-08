// create a node
const Node = function (val) {
    this.value = val;
    this.next = null;
    this.prev = null;
}

// ---------------< create a LL >---------------
// singly
class LL {
    constructor(value) {
        this.head = {
            value,
            next: null
        };
        this.tail = this.head
    };
}

// doubly
class LL {
    constructor(value) {
        this.head = {
            value,
            next: null,
            previous: null
        };
        this.tail = this.head
    }
}

// -------------< insert a node to tail >-------------
// doubly
LL.prototype.addToTail = function (val) {
    var newNode = new Node(val);
    if (this.tail) {
        this.tail.next = newNode;
        newNode.previous = this.tail;
        this.tail = newNode;
    } else {
        this.head = newNode;
        this.tail = this.head;
    }
};

// singly
LL.prototype.addToTail = function (val) {
    var newNode = new Node(val);
    if (this.tail) {
        this.tail.next = newNode;
        this.tail = newNode;
    } else {
        this.head = newNode;
        this.tail = this.head;
    }
}

// -------------< insert a node to head >-------------
// doubly
LinkedList.prototype.addToHead = function (val) {
    var newNode = new Node(val);
    if (this.head) {
        newNode.next = this.head;
        this.head.previous = newNode;
        this.head = newNode;
    } else {
        this.head = newNode;
        this.tail = this.head;
    }
};

// singly
LinkedList.prototype.addToHead = function (val) {
    var newNode = new Node(val);
    if (this.head) {
        newNode.next = this.head;
        this.head = newNode;
    } else {
        this.head = newNode;
        this.tail = this.head;
    }
};

