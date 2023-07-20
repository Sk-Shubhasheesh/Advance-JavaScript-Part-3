function* makeRangeIterator(start = 0, end = Infinity, step = 1) {
    let iterationCount = 0;
    for (let i = start; i < end;) {
      iterationCount++;
      i += step;
      yield i;
    }
    return iterationCount;
  }
const iter = makeRangeIterator();
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());