const { expect } = require('@jest/globals');
const mergeSort = require('../merge');

describe('merge sort method', () => {

  it(' should return sorted array', () => {
    let arr =[8,4,23,42,16,15];
    let result= mergeSort(arr);

    expect(result).toEqual([ 4, 8, 15, 16, 23, 42 ]);
  });

});
