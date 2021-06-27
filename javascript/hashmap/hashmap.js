const HashTaple =require( '../hashTable/hashTable' );

function repeatedWord(str) {
  let splittedStr = splitstr(str);
  let hashmap = new HashTaple();
  for (let str of splittedStr) {
    // console.log('dddddddd',str.toLowerCase());
    if (hashmap.contains(str.toLowerCase())) return str;
    hashmap.add(str.toLowerCase(), 1);
  }
}

function splitstr(str) {
  let newstr = str.split(',').join('');
  let listStr = newstr.split(' ');
  console.log(listStr);
  return listStr;
}

module.exports=repeatedWord;
