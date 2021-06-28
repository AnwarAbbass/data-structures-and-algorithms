const {Node,BinaryTree} = require('../../tree/tree');
const {expect} = require('@jest/globals');
const treeIntersection= require('../hashmapTreeIntersection');

describe('Testing tree', () => {
  it('It should return a node', () => {
    const tree1 = new BinaryTree();
    const tree2 = new BinaryTree();

    const node11 = new Node(5);
    const node1 = new Node(6);
    const node2 = new Node(8);

    tree1.root=node11;
    tree1.root.left=node1;
    tree1.root.right=node2;

    const node12 = new Node(8);
    const nod1 = new Node(5);
    const nod2 = new Node(1);

    tree2.root=node12;
    tree2.root.left=nod1;
    tree2.root.right=nod2;

    expect(treeIntersection(tree1,tree2)).toEqual([ 5, 8 ]);
  });
});
