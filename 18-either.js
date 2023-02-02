// Either 函子
class Left {
  static leftOf(value) {
    return new Left(value);
  }
  constructor(value) {
    this._value = value;
  }
  map(fn) {
    return this;
  }
}

class Right {
  static rightOf(value) {
    return new Right(value);
  }
  constructor(value) {
    this._value = value;
  }
  map(fn) {
    return Right.rightOf(fn(this._value));
  }
}

function parseJSON(str) {
  try {
    return Right.rightOf(JSON.parse(str));
  } catch (e) {
    return Left.leftOf({ error: e.message });
  }
}

let l1 = Left.leftOf(12).map((x) => x + 2);
console.log("l1:", l1);

let r1 = Right.rightOf(12).map((x) => x + 2);
console.log("r1:", r1);

let r2 = parseJSON("{name:zs}");
console.log(r2)

let r3 = parseJSON('{"name":"zs"}').map(x=>x.name.toUpperCase());
console.log(r3)