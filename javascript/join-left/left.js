
const HashTable =require( '../hashTable/hashTable' );

function leftJoin(leftHashTable,rightHashTable){
  const newTable = new HashTable(10);
  let values=leftHashTable.table.map(item=>{
    return Object.keys(item.head.value);
  });
  for (let key of values){
    if(key)
    {
      let left=leftHashTable.get(key[0]);
      let right= rightHashTable.get(key[0]);
      console.log(135,left);
      newTable.add(key[0],[left,right ]);
    }
  }
  return newTable.table;
}

module.exports=leftJoin;
