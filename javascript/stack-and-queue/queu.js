'use strict';
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Queu {
  constructor() {
    this.front = null;
    this.rear = null;
  }

  enqueue(val) {
    let node = new Node(val);
    if (this.front) {
      this.rear.next = node;
      this.rear = node;
    }
    else {
      this.front = node;
      this.rear = node;
    }
  }

  dequeue() {
    let temp = this.front;
    if (!this.front) {
      return 'exception ';
    }
    if (this.front === this.rear) this.rear = null;
    this.front = this.front.next;
    return temp.data;
  }

  peek() {
    return this.front.data;
  }

  isEmpty() {
    return this.front ? false : true;
  }
}

module.exports = Queu;
