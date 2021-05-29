'use strict';

const insertShiftArray = require('../shift-array');

describe('Testing challenge 2', () => {
  test('It should shift array from the meddle', () => {
    const test1 =[2,4,6,-8];

    expect(insertShiftArray(test1, 5)).toEqual([2,4,5,6,-8]);

  });
});
