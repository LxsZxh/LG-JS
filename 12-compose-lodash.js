// lodash 中的函数组合方法 _.flowRight()
const _ = require("lodash");

const reverse = (arr) => arr.reverse();
const first = (arr) => arr[0];
const toUpper = (str) => str.toUpperCase();

const res = _.flowRight(toUpper, first, reverse);
console.log(res(["Hello", "World"]));
