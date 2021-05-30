'use strict';

const Stack = require('../stack-and-queue/stack');

class PseudoQueue {
  constructor() {
    this.stack1 = new Stack();
    this.stack2 = new Stack();
  }

  enqueue(val) {
    this.stack1.push(val);
  }

  dequeue() {
    if (this.stack1.isEmpty() && this.stack2.isEmpty()) {
      return 'rejected';
    }
    if (this.stack2.isEmpty()) {
      while (!this.stack1.isEmpty()) {
        this.stack2.push(this.stack1.pop());
      }
      return this.stack2.pop();
    }
    else return this.stack2.pop();
  }
}

module.exports=PseudoQueue;
