// Functor 函子
// 函子就是一个实现了map契约的对象
class Container1 {
  constructor(value) {
    this._value = value;
  }
  map(fn) {
    return new Container1(fn(this._value));
  }
}

let res1 = new Container1(5).map((item) => item + 1).map((item) => item * item);
console.log(res1);

console.log("---------------------------");

class Container2 {
  static of(value) {
    return new Container2(value);
  }
  constructor(value) {
    this._value = value;
  }
  map(fn) {
    return Container2.of(fn(this._value));
  }
}

let res2 = Container2.of(6)
  .map((item) => item + 1)
  .map((item) => item * item);
console.log(res2);
