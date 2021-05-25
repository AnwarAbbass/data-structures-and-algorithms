'use strict';
const binarySearch = require('../BinarySearch');

describe('Testing challenge 3', () => {
  test('It should return key index', () => {
    const test1 = [2, 4, 6, -8];

    expect(binarySearch(test1, 5)).toEqual(-1);

  });
});
