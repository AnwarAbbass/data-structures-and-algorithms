'use strict';

const multiBracketValidation = require('../multi-bracket-validation.js');
const { expect } = require('@jest/globals');

describe('multi bracket test', () => {
  it('send 2 bracket ', () => {
    let brackets='{}';
    expect(multiBracketValidation(brackets)).toBeTruthy();
  });

  //   it('add to the stack', () => {
  //     stack.push(5);
  //     stack.push(8);
  //     expect(stack.peek()).toEqual(8);
  //     expect(stack.isEmpty()).toEqual(false);
  //   });

  //   it('create stack', () => {
  //     expect(stack.pop()).toBe(8);
  //   });

});

