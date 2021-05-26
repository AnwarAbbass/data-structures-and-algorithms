const LL= require('../linked-list/index');

module.exports=(list1, list2)=>{
  let temp1=list1.head;
  let temp2=list2.head;
  let list3;
  // initialize list3
  list3 = new LL();
  while(temp1 || temp2) {
    list3.append(temp1.data);
    list3.append(temp2.data);

    temp1 = temp1 ? temp1.next : temp1;
    temp2 = temp2 ? temp2.next : temp2;
  }

  return list3;
};

