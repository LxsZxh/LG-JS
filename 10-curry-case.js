/**
 * 柯里化案例
 * match() 方法检索返回一个字符串匹配正则表达式的结果，匹配不到返回null
 * !匹配字符串中的所有空白字符:''.match(/\s+/g)
 * !匹配字符串中的所有数字:''.match(/\d+/g)
 */

const _ = require("lodash");

const matchStr = _.curry(function (reg, str) {
  return str.match(reg);
});
// 匹配空白字符
const haveSpace = matchStr(/\s+/g);
console.log(haveSpace("hello world"));

// 匹配数字
const haveNumber = matchStr(/\d+/g);
console.log(haveNumber("Hello World 2023"));

// 过滤出数组中包含空格的字符
const filter = _.curry(function (fn,arr) {
    return arr.filter(fn)
});
console.log(filter(haveSpace,['hello world','hello_world']));

const findSpace=filter(haveSpace)
console.log(findSpace(['hello world','hello_world']))