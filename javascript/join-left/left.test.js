
'use strict';
const { expect } = require('@jest/globals');
const HashTaple =require( '../hashTable/hashTable' );
const leftJoin = require('./left');

describe('hashing Hash tables', () => {
  it('should successfully add a key/value to the hashtable', () => {
    let left = new HashTaple(6);
    let right = new HashTaple(6);

    left.add('Noura',24);
    left.add('Noor',23);
    left.add('Tala',25);
    left.add('Manar', 26);

    right.add('bero',6);
    right.add('Noor',8);
    right.add('Noura',7);
    right.add('Manar', 3);
    expect(leftJoin(left,right)).toEqual({"size": 6, "table": [{"head": {"next": null, "value": {"0": [23, 8]}}}, {"head": {"next": null, "value": {"5": [24, 7]}}}, {"head": {"next": null, "value": {"4": [25, null]}}}, {"head": {"next": null, "value": {"3": [26, 3]}}}, undefined, undefined]});
  });
});
