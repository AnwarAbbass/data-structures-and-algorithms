'use strict';

function multiBracketValidation(input){
  const opening=['(','[','{'];
  const closing=[')',']','}'];
  let check_list = [];
  for (let i in input){
    console.log('in for');
    if (i in opening) check_list.push(i);
    else if (i in closing){
      console.log('closing');
      let pos = closing.index(i);
      if ((check_list.length > 0)&&(opening[pos] === check_list[check_list.length -1])) check_list.shift();
      else return false;
    }
  }
  console.log('out of for',check_list);
  if (check_list.length === 0) return true;
  else return false;
}

module.exports=multiBracketValidation;
