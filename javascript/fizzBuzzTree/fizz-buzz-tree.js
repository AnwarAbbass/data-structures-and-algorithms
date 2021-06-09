'use strict';
class Node{
  constructor( value=null){
    this.value = value;
    this.next = null;
  }
}

class Queue{
  constructor(){
    this.front = null;
    this.rear = null;
  }

  enqueue( value){
    node = new Node(value);

    if (!this.front){

      this.front = node;
      this.rear = node;
    }
    else{
      this.rear.next = node;
      this.rear = this.rear.next;
    }
  }

  dequeue(){
    let temp = this.front;
    this.front = this.front.next;
    temp.next = null;
    return temp.value;
  }

  isEmpty(){
    if (this.front) return false;
    return true;
  }
}


class KNode{
  constructor(value=null)
  {
    this.value = value;
    this.children = [] ;
  }}

class KaryTree{
  constructor(root=null){
    this.root=root;
  }
}

function FizzBuzzTree(tree){
  let fizzbuzzlist = [];
  let queque = new Queue();
  queque.enqueue(tree.root);
  while (!(queque.isEmpty())){
    let item = queque.dequeue();
    if (item.value % 15 === 0) item.value = 'FizzBuzz';
    else if (item.value % 3 ===0 ) item.value = 'Fizz';
    else if (item.value % 5 ===0) item.value = 'Buzz';
    else {
      item.value = item.value+'';}
    fizzbuzzlist.push(item.value);
    if (item.children !==[] ){
      for(let i of item.children){
        queque.enqueue(i);
      }}}
  return fizzbuzzlist;}

module.exports={KNode,KaryTree,FizzBuzzTree};
