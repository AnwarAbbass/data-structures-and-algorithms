'use strict';
const {Node,BinaryTree,BinarySearchTree} = require('../tree');
const {expect} = require('@jest/globals');

describe('Testing tree', () => {
  it('It should return a node', () => {
    const node = new Node(5);

    expect(node.value).toEqual(5);
    expect(node.left).toBeNull();
  });

  const tree = new BinaryTree();
  it('It should return a tree', () => {

    expect(tree.root).toBeNull();
  });

  it('It should return a tree', () => {
    //arrange
    const node1 = new Node(5);
    // act
    tree.root=node1;
    expect(tree.root.value).toBe(node1.value);
  });

  it ('should return the tree', () => {
    const node1 = new Node(1);
    const node2 = new Node(11);

    tree.root.left=node1;
    tree.root.right=node2;

    expect(tree.root.left.value).toEqual(node1.value);
    expect(tree.root.right.value).toEqual(node2.value);
    expect(tree.postorder()).toEqual([1,11,5]);
    expect(tree.preorder()).toEqual([5,1,11]);
    expect(tree.inorder()).toEqual([1,5,11]);
  });

  let binary;
  it('creat binary search tree',()=>{
    binary=new BinarySearchTree();
    expect(binary.contains(4)).toEqual('the tree is null');
  });

  it ('test binary search add', () => {
    binary.add(5);
    binary.add(7);
    binary.add(1);
    binary.add(0);
    binary.add(8);
    binary.add(2);
    binary.add(6);

    expect(binary.root.value).toEqual(5);
    expect(binary.root.right.value).toEqual(7);
    expect(binary.add(5)).toEqual('cant add exist value');
  });

  it ('test binary search add', () => {
    expect(binary.contains(5)).toBeTruthy();
    expect(binary.contains(4)).toBeFalsy();
    expect(binary.contains(2)).toBeTruthy();
  });

  it ('test binary max value for empty tree', () => {
    let emptyTree=new BinaryTree();
    expect(emptyTree.findMaximumValue()).toBe('No tree found');
  });


  it ('test binary max value ', () => {
    expect(tree.findMaximumValue()).toBe(11);
  });

  it ('test binary tree breadth first', () => {
    const node1 = new Node(-5);
    const node2 = new Node(55);

    tree.root.left.left=node1;
    tree.root.right.right=node2;

    expect(tree.breadthFirst()).toEqual([ 5, 1, 11, -5, 55 ]);

  });

});
