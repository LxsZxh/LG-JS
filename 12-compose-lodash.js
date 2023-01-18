// lodash 中的函数组合方法 _.flowRight()
const _ = require("lodash");

const reverse = (arr) => arr.reverse();
const first = (arr) => arr[0];
const toUpper = (str) => str.toUpperCase();

const res = _.flowRight(toUpper, first, reverse);
console.log(res(["Hello", "World"]));

console.log("-------------------------------");

// 手写 flowRight 函数
function compose(...args) {
  return function (value) {
    return args.reverse().reduce(function (acc, fn) {
      return fn(acc);
    }, value);
  };
}
const composeRes = compose(toUpper, first, reverse);
console.log(composeRes(["Hello", "World"]));

console.log("-------------------------------");

// 箭头函数书写 flowRight 函数
const arrowCompose =
  (...args) =>
  (value) =>
    args.reverse().reduce((acc, fn) => fn(acc), value);

const arrowRes = arrowCompose(toUpper, first, reverse);
console.log(arrowRes(["Hello", "World"]));
