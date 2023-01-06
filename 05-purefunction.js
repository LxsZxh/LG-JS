/**
 * 纯函数和非纯函数
 * ! 纯函数:相同的输入永远会得到相同的输出
 * slice 和 splice
 */

let arr = [0, 1, 2, 3, 4, 5];
console.log(arr.slice(0, 3)); // [ 0, 1, 2 ]
console.log(arr.slice(0, 3)); // [ 0, 1, 2 ]
console.log(arr.slice(0, 3)); // [ 0, 1, 2 ]
console.log(arr); // [ 0, 1, 2, 3, 4, 5 ]

console.log("-----------------------------");

console.log(arr.splice(0, 3)); // [ 0, 1, 2 ]
console.log(arr.splice(0, 3)); // [ 3, 4, 5 ]
console.log(arr.splice(0, 3)); // []
console.log(arr); // []

console.log("-----------------------------");

let getSum = (num1, num2) => num1 + num2;
console.log(getSum(1,2))
console.log(getSum(1,2))
console.log(getSum(1,2))
