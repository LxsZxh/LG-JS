// lodash 中的 curry 基本使用

const _ = require("lodash");
function getSum(a, b, c) {
  return a + b + c;
}
const curried = _.curry(getSum);
console.log(curried(1, 2, 3));
console.log(curried(1)(2,3));
console.log(curried(1)(2)(3)); 

console.log('-------------------------------');

// 模拟实现 lodash 中的 curry 方法

function curry(func){
  return function curriedFn(...args){
    if(args.length < func.length){
      return function(){
        return curriedFn(...args.concat(Array.from(arguments)))
      }
    }
    return func(...args)
  }
}
const curried2= curry(getSum);
console.log(curried2(1, 2, 3));
console.log(curried2(1)(2,3));
console.log(curried2(1)(2)(3)); 
