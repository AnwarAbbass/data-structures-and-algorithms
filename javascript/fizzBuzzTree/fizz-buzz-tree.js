'use strict';
class Node {
  constructor(value) {
    this.value = value;
  }
}

class kayTree {
  constructor() {
    this.root = null;
    this.children = []; // to push the added node.
  }
  addNode(value) {
    const node = new Node(value);
    if(this.root === null) {
      this.root = node;
    } else {
      this.children.push(node);
    }
    return node;
  }
}

function FizzBuzzTree(tree) {
  if (tree.root == null) return 'the tree is null';

  let newTree = new kayTree();
  newTree.root=tree.root.value;
  for (let i = 0; i < tree.children.length; i++) {
    if (tree.children[i].value % 3 === 0 && tree.children[i].value % 5 === 0) {
      newTree.children[i] = 'FizzBuzz';
    } else if (tree.children[i].value % 3 === 0) {
      newTree.children[i] = 'Fizz';
    } else if (tree.children[i].value % 5 === 0) {
      newTree.children[i] = 'Buzz';
    } else {
      newTree.children[i] = tree.children[i].value.toString();
    }

  }
  return newTree;
}

module.exports=FizzBuzzTree;
