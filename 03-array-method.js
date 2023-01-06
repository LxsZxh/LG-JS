// 模拟常用高阶函数：map、every、some

// map
const map = (array, fn) => {
  let res = [];
  for (const val of array) {
    res.push(fn(val));
  }
  return res;
};

let mapArr = [1, 2, 3, 4, 5];
mapArr = map(mapArr, (v) => v * v);
console.log(mapArr);

console.log("-----------------");

// every
const every = (array, fn) => {
  let res = true;
  for (const val of array) {
    res = fn(val);
    if (!res) {
      break;
    }
  }
  return res;
};

let everyArr = [9, 11, 12, 13, 14];
let r = every(everyArr, (v) => v > 10);
console.log(r);

console.log("-----------------");

// some
const some = (arr, fn) => {
  let res = false;
  for (const val of arr) {
    res = fn(val);
    if (res) {
      break;
    }
  }
  return res;
};

let someArr = [2, 4, 6, 7, 9, 12];
let someResult = some(someArr, (v) => v > 10);
console.log(someResult);
