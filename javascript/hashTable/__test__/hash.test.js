'use strict';
const { expect } = require('@jest/globals');

const Hash = require('../hashTable');

describe('hashing Hash tables', () => {
  let hash = new Hash(1024);

  it('should successfully add a key/value to the hashtable', () => {
    hash.add('sara', 'ali');
    hash.add('batool', 'hind');
    hash.add('sahar', 'majd');

    expect(hash.contains('sara')).toEqual(true);
  });

  it('retrieving based on a key returns the value stored', () => {
    hash.add('sara', 'ali');
    hash.add('batool', 'hind');
    hash.add('sahar', 'majd');

    expect(hash.get('sara')).toEqual('ali');
  });

  it('successfully returns false for a key that does not exist in the hashtable', () => {
    hash.add('sara', 'ali');
    hash.add('batool', 'hind');
    hash.add('sahar', 'majd');

    expect(hash.contains('suhib')).toEqual(false);
  });

  it('successfully handles a collision within the hash table', () => {
    hash.add('sara', 'ali');
    hash.add('batool', 'hind');
    hash.add('sahar', 'majd');

    expect(hash.add('sara', 'batool')).toEqual(undefined);
  });

  it('successfully retrieve a value from a bucket within the hashtable that has a collision', () => {
    hash.add('sara', 'ali');
    hash.add('batool', 'hind');
    hash.add('sahar', 'majd');

    expect(hash.get('sara')).toEqual('ali');
  });

  it('Successfully hash a key to an in-range value', () => {
    const range = hash.hash('ishaq');
    console.log(range);
    expect(range).toBeLessThanOrEqual(1024);
  });

});
