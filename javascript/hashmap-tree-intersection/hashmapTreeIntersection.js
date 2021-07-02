const HashTaple = require('../hashTable/hashTable');
function treeIntersection(tree1,tree2){
  let hash = new HashTaple();
  let tree1Arr=tree1.inorder();
  let tree2Arr=tree2.inorder();
  let i =0;
  while(i<tree1Arr.length){
    hash.add(`${tree1Arr[i]}`,`${i}`);
    i++;
  }

  let j =0;
  let values=[];
  // console.log('h',hash.contains('8'))
  // console.log('h',hash.contains('1'))
  while(j<tree2Arr.length){
    if (hash.contains(`${tree2Arr[j]}`)) values.push(tree2Arr[j]);
    j++;
  }
  console.log(values);
  return values;
}

module.exports = treeIntersection;
