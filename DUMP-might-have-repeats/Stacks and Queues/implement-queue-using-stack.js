class Queue {
    constructor() {
        this.stack1 = new Stack;
        this.stack2 = new Stack;
    }

    enqueue(n) {
        if (this.stack1.peek()) {
            swapStack(this.stack1, this.stack2)
        }
        this.stack2.push(n);
        return this.stack2;
    }

    dequeue() {
        if(this.stack2,peek()){
            swapStack(this.stack2, this.stack1)
        }
        this.stack1.pop()
        return this.stack1
    }
}

function swapStack(fromStack, toStack) {
    while (fromStack.peek()) {
        toStack.push(fromStack.pop())
    }
}

