'use strict';


const Queue = require('../queue-with-stacks');

describe('pseudo queue test', () => {
  let queue;
  it('create queue', () => {
    queue = new Queue();
    expect(queue.stack1.top).toBeNull();
    expect(queue.stack2.isEmpty()).toBeTruthy();
  });

  it('add to the queue', () => {
    queue.enqueue(5);
    queue.enqueue(8);
    expect(queue.stack1.isEmpty()).toEqual(false);
  });

  it('delete from queue', () => {
    expect(queue.dequeue()).toBe(5);
  });

  it('delete from queue', () => {
    queue.dequeue();
    expect(queue.dequeue()).toBe('rejected');
  });

});
