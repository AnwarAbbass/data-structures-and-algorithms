'use strict';
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  add(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
      return;
    }

    let temp = this.head;
    while (temp.next) {
      temp = temp.next;
    }
    temp.next = node;
  }

  values() {
    let values = [];
    let temp = this.head;
    while (temp) {
      values.push(temp.value);
      temp = temp.next;
    }
    return values;
  }
}

class HashTaple{

  constructor(size = 1024) {
    this.size = size;
    this.table = new Array(size);
  }

  hash(key) {
    let hash = key.split('').reduce((result, n) => {
      return result + n.charCodeAt(0);
    }, 0) * 11 % this.size;
    return hash;
  }

  add(key, value) {
    let hash = this.hash(key);
    if (!this.table[hash]) {
      this.table[hash] = new LinkedList();
    }
    let keyValuePair = { [key]: value }; 
    this.table[hash].add(keyValuePair);
  }

  get(key) {
    let hashedkey = this.hash(key);
    if (this.table[hashedkey]) {
      let temp = this.table[hashedkey].head;
      while (temp) {
        if (key === Object.keys(temp.value)[0]) return Object.values(temp.value)[0];
        temp = temp.next;
      }
    }
    return null;
  }


  contains(key) {
    let hashedkey = this.hash(key);
    if (this.table[hashedkey]) {
      let temp = this.table[hashedkey].head;
      while (temp) {
        // console.log()
        if (key === Object.keys(temp.value)[0]) return true;
        temp = temp.next;
      }
    }
    return false;
  }

}

module.exports=HashTaple;
