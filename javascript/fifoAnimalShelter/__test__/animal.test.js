'use strict';

const Queue = require('../fifo-animal-shelter');
const { expect } = require('@jest/globals');

describe('Queue test', () => {
  let queue;
  it('create queue', () => {
    queue = new Queue();
    expect(queue.cat.front).toBeNull();
    expect(queue.dog.isEmpty()).toBeTruthy();
  });

  it('add to the queue', () => {
    queue.enqueue({type: 'cat',name:'kity'});
    queue.enqueue({type: 'dog',name:'kity'});
    expect(queue.cat.peek().name).toEqual('kity');
    expect(queue.dog.isEmpty()).toEqual(false);
  });

  it('dequeue', () => {
    console.log(queue);
    expect(queue.dequeue('dog').type).toBe('dog');
    expect(queue.dequeue('cat').type).toBe('cat');
    expect(queue.dequeue('cat')).toBe('exception ');
  });

  it('delete empty queue or ', () => {
    expect(queue.dequeue('fish')).toBe(null);
  });

});
