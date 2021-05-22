'use strict';

// Require our linked list implementation
const LinkedLilst = require('../index');

describe('Linked List', () => {
  it('works', () => {
    expect(true).toBeTruthy();
  });

  let list;
  it('create linked list', () => {
    list = new LinkedLilst()
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

  it('should check if the value is exist', () => {
    let val = 'b';
    let val2='r'

    expect(list.includes(val)).toBe(true);
    expect(list.includes(val2)).toBe(false);
  });

  it('should return linked list ', () => {

    expect(list.toString()).toEqual('a --> b --> Null ');
  });

});
