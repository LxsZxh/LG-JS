// folktale 中的compose、curry
const {compose,curry}=require('folktale/core/lambda')
const {toUpper,first}=require('lodash/fp')

let fn=compose(toUpper,first)
console.log(fn(['hello','world']))

let f=curry(2,(x,y)=>{
    return x+y
})
console.log(f(2,3)); 
console.log(f(2)(3))