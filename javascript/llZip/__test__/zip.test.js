const LinkedList = require('../../linked-list/index');
const zip = require('../ll-zip.js');
const { expect } = require('@jest/globals');

describe('Linked List', () => {

  let list2 = new LinkedList();

  list2.append(2);
  list2.append(4);
  list2.append(6);
  list2.append(8);

  it('zip function ', () => {
    let list1 = new LinkedList();
    list1.append(1);
    list1.append(3);
    list1.append(5);
    list1.append(7);

    let list = new LinkedList();
    list = zip(list1, list2);

    expect(list.toString()).toEqual('1 --> 2 --> 3 --> 4 --> 5 --> 6 --> 7 --> 8 --> Null ');
  });

  it('when list1 is longer than list2 ', () => {
    let list1 = new LinkedList();
    list1.append(1);
    list1.append(3);
    list1.append(5);
    list1.append(7);

    let list = new LinkedList();
    list1.append(9);
    list = zip(list1, list2);

    expect(list.toString()).toEqual('1 --> 2 --> 3 --> 4 --> 5 --> 6 --> 7 --> 8 --> 9 --> Null ');
  });

  it('when list2 is longer than list1 ', () => {
    let list1 = new LinkedList();
    list1.append(1);
    list1.append(3);
    list1.append(5);
    list1.append(7);

    let list = new LinkedList();
    list2.append(10);
    list2.append(12);
    list = zip(list1, list2);

    expect(list.toString()).toEqual('1 --> 2 --> 3 --> 4 --> 5 --> 6 --> 7 --> 8 --> 10 --> 12 --> Null ');
  });

});
