
'use strict';
const { expect } = require('@jest/globals');
const HashTaple =require( '../hashTable/hashTable' );
const leftJoin = require('./left');

describe('hashing Hash tables', () => {
  it('should successfully add a key/value to the hashtable', () => {
    let left = new HashTaple(6);
    let right = new HashTaple(6);

    left.add('fond','enamored');
    left.add('wrath','anger');
    left.add('diligent','employed');
    left.add('outfit', 'garb');
    left.add('guide', 'usher');

    right.add('fond','averse');
    right.add('wrath','delight');
    right.add('diligent','idle');
    right.add('guide', 'follow');
    right.add('flow', 'jam');
    let x=leftJoin(left, right);
    let y=x.map(item=>{
      return item.head.value;
    });
    console.log('from test', x);
    expect(y).toEqual([
      { wrath: [ 'anger', 'delight' ] },
      undefined,undefined,
      { fond: [ 'enamored', 'averse' ] },
      undefined,undefined,undefined,
      { outfit: [ 'garb', null ] },
      { diligent: [ 'employed', 'idle' ] },
      undefined,
    ]);
  });
});
