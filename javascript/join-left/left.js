const HashTaple =require( '../hashTable/hashTable' );


function leftJoin(left,right){
  let hash = new HashTaple(6);
  // let temp = this.table[hashedkey].head;
  console.log(Object.keys(left.table));
  for (let key of Object.keys(left.table)){
    let l=left.get1(key);
    let r = right.get1(key);
    console.log('--------------',l,r);
    hash.add(key, [l,r ]);
    // console.log(left.get(key))
    // console.log(hash.table[key])
  }
  return hash;
}

module.exports=leftJoin;
