// IO 函子
const fp = require("lodash/fp");

class IO {
  static of(value) {
    return new IO(function () {
      return value;
    });
  }
  constructor(fn) {
    this._value = fn;
  }

  map(fn) {
    return new IO(fp.flowRight(fn, this._value));
  }
}
const res=IO.of(process).map(p=>p.execPath)
console.log(res._value());
