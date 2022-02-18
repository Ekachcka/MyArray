class MyArray {
  constructor(...item) {
    for (let i = 0; i < item.length; i++) {
      this[i] = item[i];
    }
    this.length = item.length;
  }

  push(...item) {
    for (let i = this.length, j = 0; j < item.length; i++) {
      this[i] = item[j++];
    }
    this.length = this.length + item.length;
    return this;
  }
  pop() {
    let item = this[--this.length];
    delete this[this.length];

    return item;
  }
  forEach(fun) {
    for (let i = 0; i < this.length; i++) {
      fun(this[i]);
    }
    return undefined;
  }
  map(fun) {
    const arr = new MyArray();
    for (let i = 0; i < this.length; i++) {
      arr.push(fun(this[i]));
    }
    return arr;
  }
}
const arr = new MyArray(1, 2, 3, 4);
