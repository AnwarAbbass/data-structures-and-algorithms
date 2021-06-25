const { expect } = require('@jest/globals');
const quickSort = require('../quick');

describe('merge sort method', () => {

  it(' should return sorted array', () => {
    let arr =[20,18,12,8,5,-2];
    let n = arr.length-1;
    let result= quickSort(arr,0,n);
    console.log(result);
    expect(result).toEqual([ -2, 5, 8, 12, 18, 20 ]);
  });

});
