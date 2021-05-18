'use strict';
const d = require('../shift-array.js');

describe('Testing challenge 2', () => {
    test('It should return reverse array', () => {
        const test1 =[2,4,6,-8];

        expect(d(test1, 5)).toEqual([2,4,5,6,-8]);

    });
});
