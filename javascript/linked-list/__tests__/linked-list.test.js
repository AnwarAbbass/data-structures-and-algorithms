'use strict';

// Require our linked list implementation
const LinkedLilst = require('../index');

describe('Linked List', () => {

  it('works', () => {
    expect(true).toBeTruthy();
  });

  it('Where the linked list is of a size 1', () => {
    let list=new LinkedLilst();
    let val1='a';

    list.insert(val1);

    expect(list.kthFromEnd(0)).toEqual('a');
    expect(list.kthFromEnd(1)).toEqual('Exception');
  });



  it('Where k is not a positive integer', () => {
    let list=new LinkedLilst();

    let val2='b';
    let val3 ='c';
    let val1='a';

    list.insert(val1);
    list.insert(val2);
    list.insert(val3);

    expect(list.kthFromEnd(-1)).toEqual('Exception');
  });

  it('Where k and the length of the list are the same', () => {
    let list=new LinkedLilst();

    let val2='b';
    let val3 ='c';
    let val1='a';

    list.insert(val1);
    list.insert(val2);
    list.insert(val3);

    expect(list.kthFromEnd(2)).toEqual('c');
  });

  it('Where k is greater than the length of the linked list', () => {

    let list=new LinkedLilst();

    let val2='b';
    let val3 ='c';
    let val1='a';

    list.insert(val1);
    list.insert(val2);
    list.insert(val3);

    expect(list.kthFromEnd(7)).toEqual('Exception');
  });

  it('Where k and the length of the list are the same', () => {
    let list=new LinkedLilst();

    let val2='b';
    let val3 ='c';
    let val1='a';

    list.insert(val1);
    list.insert(val2);
    list.insert(val3);

    expect(list.kthFromEnd(1)).toEqual('b');
  });

});
