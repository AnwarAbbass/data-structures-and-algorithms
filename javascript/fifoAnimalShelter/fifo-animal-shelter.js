const Queue = require('../stack-and-queue/queu');

class AnimalShelter {
  constructor() {
    this.cat = new Queue;
    this.dog = new Queue;
  }
  enqueue(animal){
    if(animal.type==='cat') this.cat.enqueue(animal);
    else if(animal.type==='dog') this.dog.enqueue(animal);
  }

  dequeue(preef){
    if(preef==='cat') return this.cat.dequeue();
    else if(preef==='dog') return this.dog.dequeue();
    else return null;
  }
}

module.exports=AnimalShelter;
