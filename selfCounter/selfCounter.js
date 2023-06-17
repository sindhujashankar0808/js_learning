class SelfCounter {
  constructor() {
    this.count = 0;
  }
  increment(add = 1) {
    this.count += add;
  }
  getvalue() {
    return this.count;
  }
}
const counter = new SelfCounter();
counter.increment();
counter.increment();
console.log(counter.getvalue());
counter.increment(5);
counter.increment();
console.log(counter.getvalue());
