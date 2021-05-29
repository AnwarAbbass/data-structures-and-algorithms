'use strict';
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Stack{
  constructor(){
    this.top= null;
  }

  push(val){
    let node = new Node(val);
    if(this.top){
      node.next=this.top;
      this.top=node;
    }
    else{
      this.top=node;
    }
  }

  pop(){
    if(!this.top){
      return 'exception ';
    }
    else{
      let node=this.top;
      this.top=this.top.next;
      return node.data;
    }
  }

  peek(){
    return this.top.data;
  }

  isEmpty(){
    return this.top?false:true;
  }
}

module.exports=Stack;
