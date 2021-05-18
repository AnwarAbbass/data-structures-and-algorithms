'use strict';
const d = require('../binarySearch/BinarySearch.js');

describe('Testing challenge 3', () => {
    test('It should return key index', () => {
        const test1 =[2,4,6,-8];

        expect(d(test1, 5)).toEqual(-1);

    });
});
