// 记忆函数 memoize
const _ = require("lodash");

function getArea(r) {
  console.log(r);
  return Math.PI * r * r;
}
let res = _.memoize(getArea);

console.log(res(4));
console.log(res(4));
console.log(res(4));

console.log('--------------------------');

// 模拟 memoize 实现
function memoize(f) {
  let cache = {};
  return function () {
    let key = JSON.stringify(arguments);
    cache[key] = cache[key] || f.apply(f, arguments);
    return cache[key]; 
  };
}

let memoizeRes = memoize(getArea);

console.log(memoizeRes(5));
console.log(memoizeRes(5));
console.log(memoizeRes(5));