export class Queue {
  constructor() {
    this.array = new Array();
  }
  enqueue(...items) {
    this.array.push(...items);
    return this;
  }
  dequeue() {
    return this.array.shift();
  }
  isEmpty() {
    return this.array.length < 1;
  }
}
