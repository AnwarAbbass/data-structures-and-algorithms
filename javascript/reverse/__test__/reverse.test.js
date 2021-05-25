'use strict';
//[1,2,3,4]  [4,3,2,1]
const d = require('../f.js');

describe('Testing challenge 2', () => {
  test('It should return reverse array', () => {
    const test1 = [1, 2, 3, 4, 5, 6];

    expect(d(test1)).toEqual([6, 5, 4, 3, 2, 1]);

  });
});
