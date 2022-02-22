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
    this.length += item.length;
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
  shift() {
    let item = this[0];
    delete this[0];
    for (let i = 0; i < this.length; i++) {
      this[i] = this[i + 1];
    }
    this.length--;
    delete this[this.length];
    return item;
  }
  unshift(...item) {
    for (let i = this.length - 1; i >= 0; i--) {
      this[i + item.length] = this[i];
    }
    for (let i = 0; i < item.length; i++) {
      this[i] = item[i];
    }
    this.length += item.length;
    return this.length;
  }
  reverse() {
    let n = 0;
    for (let i = 0; i < this.length/2; i++) {
      n = this[i];
      this[i]=this[this.length-i-1];
      this[this.length-i-1]=n;
    }
    return this;
  }
  
}
const arrey = new MyArray("a", "b", "c", "d","e");
const arr = [1, 2, 3, 4];
