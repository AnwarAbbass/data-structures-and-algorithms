'use strict';

class Node {
  constructor(value, right = null, left = null) {
    this.value = value;
    this.right = right;
    this.left = left;
  }
}

class BinaryTree {
  constructor(root=null){
    this.root= root;
  }

  preorder(){
    let tree=[];
    let values = (node)=>{
      tree.push(node.value);
      if(node.left) values(node.left);
      if(node.right) values(node.right);
    };
    values(this.root);
    return tree;
  }

  postorder(){
    let tree=[];
    let values = (node)=>{
      if(node.left) values(node.left);
      if(node.right) values(node.right);
      tree.push(node.value);
    };
    values(this.root);
    return tree;
  }

  inorder(){
    let tree=[];
    let values = (node)=>{
      if(node.left) values(node.left);
      tree.push(node.value);
      if(node.right) values(node.right);
    };
    values(this.root);
    return tree;
  }

  findMaximumValue(){
    let max;
    if (this.root) max = this.root.value;
    else return 'No tree found';
    let inner=(node)=>{
      if (max < node.value) max = node.value;
      if (node.left) inner(node.left);

      if (node.right) inner(node.right);

    };
    inner(this.root);
    return max;
  }
}

class BinarySearchTree{
  constructor(){
    this.root=null;
  }
  add(value){
    let temp=this.root;
    let node = new Node(value);
    if(!temp) return this.root=node;

    while (temp) {
      if(value=== temp.value) return 'cant add exist value';
      if(temp.value>value){
        if(!temp.left) return temp.left=node;
        temp=temp.left;
      }else{
        if(temp.right) temp=temp.right;
        else return temp.right=node;
      }
    }
  }

  contains(value){
    let temp=this.root;
    if(!temp) return 'the tree is null';

    while (temp) {
      if(value<temp.value) temp=temp.left;
      else if (value>temp.value) temp=temp.right;
      else if(value === temp.value) return true;
    }
    return false;
  }
}

module.exports = {Node,BinaryTree,BinarySearchTree};
