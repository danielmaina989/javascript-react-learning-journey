class MyArray extends Array {
  customMethod() {
    return this.map(x => x * 2);
  }
}

const arr = new MyArray(1, 2, 3);
console.log(arr.customMethod()); // [2, 4, 6]
