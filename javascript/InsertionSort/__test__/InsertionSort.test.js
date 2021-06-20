const { expect } = require('@jest/globals');
const insertionSort = require('../InsertionSort');

describe('Linked List', () => {

  it('zip function ', () => {
    let arr =[8,4,23,42,16,15];
    let result= insertionSort(arr);

    expect(result).toEqual([ 4, 8, 15, 16, 23, 42 ]);
  });

});
