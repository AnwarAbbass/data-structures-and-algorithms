'use strict';

const Stack = require('../stack');
const Queue = require('../queu');
const { expect } = require('@jest/globals');

describe('Stack test', () => {
  let stack;
  it('create stack', () => {
    stack = new Stack();
    expect(stack.top).toBeNull();
    expect(stack.isEmpty()).toBeTruthy();
  });

  it('add to the stack', () => {
    stack.push(5);
    stack.push(8);
    expect(stack.peek()).toEqual(8);
    expect(stack.isEmpty()).toEqual(false);
  });

  it('create stack', () => {
    expect(stack.pop()).toBe(8);
  });

});

describe('Queue test', () => {
  let queue;
  it('create queue', () => {
    queue = new Queue();
    expect(queue.front).toBeNull();
    expect(queue.isEmpty()).toBeTruthy();
  });

  it('add to the queue', () => {
    queue.enqueue(5);
    queue.enqueue(8);
    expect(queue.peek()).toEqual(5);
    expect(queue.isEmpty()).toEqual(false);
  });

  it('create queue', () => {
    expect(queue.dequeue()).toBe(5);
  });

});
