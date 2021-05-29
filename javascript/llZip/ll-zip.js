'use strict';
module.exports=(list1, list2)=>{
  let temp1=list1.head;
  let temp2=list2.head;
  while(temp2 || temp1) {
    if(temp1){
      if(temp2){
        list1.insertAfter(temp1.data,temp2.data);}
      else break;}
    else{ list1.append(temp2.data);}
    temp1 = temp1 ? temp1.next.next : temp1;
    temp2 = temp2 ? temp2.next : temp2;

  }

  return list1;
};

