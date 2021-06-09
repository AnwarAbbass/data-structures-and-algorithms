const {KNode,KaryTree,FizzBuzzTree}=require('../fizz-buzz-tree');
describe('',()=> {let node = new KNode(1);
  node.children.push(new KNode(2));
  node.children.push(new KNode(3));
  node.children.push(new KNode(4));
  node.children[0].children.push(new KNode(5));
  node.children[1].children.push(new KNode(6));
  node.children[1].children.push(new KNode(7));
  node.children[2].children.push(new KNode(15));
  node.children[2].children.push(new KNode(9));
  node.children[2].children.push(new KNode(10));

  let kTree= new KaryTree(node);
  FizzBuzzTree(kTree);
});
