/**
 * 柯里化演示
 */

function checkAge(age) {
  let min = 18;
  return age >= min;
}

// 纯函数
function checkAge2(min, age) {
  return age >= min;
}
console.log(checkAge2(18, 20));
console.log(checkAge2(18, 24));
console.log(checkAge2(22, 24));

console.log("---------------------------------");

// 柯里化
function checkAge3(min) {
  return function (age) {
    return age >= min;
  };
}
let base18 = checkAge3(18);
let base20 = checkAge3(20);

console.log(base18(20));
console.log(base20(22));

console.log("---------------------------------");

// 箭头函数书写柯里化
const checkAge4 = (min) => (age) => age >= min;
let base22 = checkAge4(22);
let base24 = checkAge4(24);

console.log(base22(20));
console.log(base24(26));
