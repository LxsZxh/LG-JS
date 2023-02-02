// Maybe 函子
class Maybe {
  static of(value) {
    return new Maybe(value);
  }

  constructor(value) {
    this._value = value;
  }

  map(fn) {
    return this.isNothing() ? Maybe.of(null) : Maybe.of(fn(this._value));
  }
  isNothing() {
    return this._value === null || this._value === undefined;
  }
}

const res1 = Maybe.of(5)
  .map((item) => item + 1)
  .map((item) => item * item);
console.log(res1);

console.log("---------------------");

const res2 = Maybe.of(null)
  .map((item) => item + 1)
  .map((item) => item * item);
console.log(res2);

console.log("---------------------");

const res3 = Maybe.of("hello world").map((item) => item.toUpperCase());
console.log(res3);