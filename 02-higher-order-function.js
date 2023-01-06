// 高阶函数-函数作为返回值

function makeFn() {
  const msg = "hello,world";
  return function () {
    console.log(msg);
  };
}

let fn = makeFn();
fn();

console.log('------------------------------')

// once
function once(fn) {
  let done = false;
  return function () {
    if (!done) {
      done=true
      return fn.apply(this,arguments)
    }
  };
}
let pay=once(function(money){
  console.log(`支付: ${money} RMB`)
})
pay(10)
pay(10)
pay(10)
pay(10)
