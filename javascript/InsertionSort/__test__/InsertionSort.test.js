const { expect } = require('@jest/globals');
const insertionSort = require('../InsertionSort');

describe('Insertion method', () => {

  it(' should return sorted array', () => {
    let arr =[8,4,23,42,16,15];
    let result= insertionSort(arr);

    expect(result).toEqual([ 4, 8, 15, 16, 23, 42 ]);
  });

});
