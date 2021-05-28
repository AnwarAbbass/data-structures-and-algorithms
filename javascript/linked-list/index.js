'use strict';

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insert(data) {
    try {
      let node = new Node(data);
      if (!this.head) {
        this.head = node;
      }
      else {
        node.next = this.head;
        this.head = node;
      }
    } catch (error) {
      console.log('error' + error);
    }
  }

  includes(data) {
    try {
      let found = false;
      let node = this.head;

      if (node) {
        while (node.next) {
          if (node.data === data) {
            found = true;
            break;
          }
          node = node.next;
        }
      }
      return found;

    } catch (error) {
      console.log('error' + error);
    }
  }

  toString() {
    try {
      let temp = '';
      let node = this.head;
      while (node) {

        if (node.next) {
          temp += `${node.data} --> `;
        }
        else {
          temp += `${node.data} --> Null `;
        }
        node = node.next;
      }
      return temp;
    } catch (error) {
      console.log('error' + error);

    }
  }
}

module.exports = LinkedList;
