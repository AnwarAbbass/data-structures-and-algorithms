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
        while (node) {
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

  append(value) {
    if (!this.head) {
      this.head = new Node(value);
    }
    else {
      let temp = this.head;
      let node = new Node(value);
      while (temp.next) {
        temp = temp.next;
      }
      temp.next = node;
    }
  }

  insertBefore(value, newVal){

    if (!this.head) {
      this.head = new Node(newVal);
    }
    else {
      let temp = this.head;
      let node = new Node(newVal);
      if(temp.data === value){
        node.next=temp;
        this.head=node;
      }
      while (temp.next) {
        if(temp.next.data === value){

          node.next =temp.next;
          temp.next = node;
          break;
        }
        temp=temp.next;
      }
    }
  }

  insertAfter(value, newVal){
    if (!this.head) {
      this.head = new Node(newVal);
    }
    else {
      let temp = this.head;
      let node = new Node(newVal);
      while (temp.next) {
        if(temp.data === value){
          node.next =temp.next;
          temp.next = node;
          break;
        }
        temp=temp.next;
      }
      if(temp.data === value){
        temp.next = node;
      }
    }

  }
}

module.exports = LinkedList;
