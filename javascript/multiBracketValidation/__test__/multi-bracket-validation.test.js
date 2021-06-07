'use strict';

const multiBracketValidation = require('../multi-bracket-validation.js');
const { expect } = require('@jest/globals');

describe('multi bracket test', () => {
  it('send 2 bracket ', () => {
    let brackets='{}';
    expect(multiBracketValidation(brackets)).toBeTruthy();
  });

  it('send multy brackets ', () => {
    expect(multiBracketValidation('{}(){}')).toBeTruthy();
    expect(multiBracketValidation('()[[Extra Characters]]')).toBeTruthy();
    expect(multiBracketValidation('(){}[[]]')).toBeTruthy();
    expect(multiBracketValidation('{}{Code}[Fellows](())')).toBeTruthy();
  });

  it('send multy wrong brackets ', () => {
    expect(multiBracketValidation('[({}]')).toBe(false);
    expect(multiBracketValidation('(](')).toBe(false);
  });

});

