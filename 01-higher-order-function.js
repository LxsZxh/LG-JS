// 高阶函数-函数作为参数

// forEach
function forEach(array, fn) {
  for (let index = 0; index < array.length; index++) {
    fn(array[index]);
  }
}

let arr1 = [1, 2, 3, 4, 5];
forEach(arr1, function (item) {
  console.log(item);
});

console.log("--------------")

// filter
function filter(arr, fn) {
  let res = [];
  for (let index = 0; index < array.length; index++) {
    if (fn(arr[index])) {
      res.push(arr[index]);
    }
  }
} 
let arr2 = [1, 2, 3, 4, 5, 6];
filter(arr2, function (item) {
  if (item % 2 === 0) {
    console.log(item);
  }
});
