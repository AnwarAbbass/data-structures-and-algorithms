'use strict';

// Require our linked list implementation
const LinkedList = require('../index');

describe('Linked List', () => {

  it('works', () => {
    expect(true).toBeTruthy();
  });


  let list;
  it('create linked list', () => {
    list = new LinkedList();
    expect(list.head).toBeNull();
  });

  it('should add new head to empty list', () => {
    let val = 'a';

    list.insert(val);

    expect(list.head.data).toEqual(val);
    expect(list.head.next).toBeNull();
  });

  it('should add new head to unempty list', () => {
    let val = 'b';

    list.insert(val);

    expect(list.head.data).toEqual(val);
    expect(list.head.next.next).toBeNull();
  });

  it('should add new node at the tail', () => {
    let val = 'c';

    list.append(val);

    expect(list.head.next.next.data).toEqual(val);
    expect(list.head.next.next.next).toBeNull();
  });

  it('should add new node befor val', () => {
    let val = 'd';

    list.insertBefore('c',val);

    expect(list.head.next.next.data).toEqual(val);
  });

  it('should add new node befor head', () => {
    let val = 'e';

    list.insertBefore('b',val);

    expect(list.head.data).toEqual(val);
  });

  it('should check if the value is exist', () => {
    let val = 'b';

    let include = list.includes(val);
    console.log(include);

    expect(include).toBe(true);

  });

  it('should return linked list ', () => {

    expect(list.toString()).toEqual("e --> b --> a --> d --> c --> Null ");
  });

  it('should add new node after val', () => {
    let val = 'm';

    list.insertAfter('b',val);

    expect(list.head.next.next.data).toEqual(val);
  });

  it('should add new node after tail', () => {
    let val = 'v';

    list.insertAfter('c',val);

    expect(list.head.next.next.next.next.next.next.data).toEqual(val);
  });

});
