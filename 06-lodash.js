/**
 * 演示 lodash
 * first / last / toUpper / reverse / each / includes / find / findIndex
 */
const _ = require("lodash");

const arr=['路飞','索隆','山治','娜美','罗宾','乔巴','弗兰奇','甚平','jack'];

console.log(_.first(arr))   // 路飞
console.log(_.last(arr))    // jack

console.log(_.toUpper(_.last(arr))) // JACK

const eachRes=_.each(arr,(item,index)=>console.log(item,index))   
console.log(eachRes) // ['路飞','索隆','山治','娜美','罗宾','乔巴','弗兰奇','甚平','jack']

console.log(_.reverse(arr)) // ['jack','甚平','弗兰奇','乔巴','罗宾','娜美','山治','索隆','路飞']

console.log(_.includes(arr,'jack')) // true

const findRes=_.find(arr,(item,index)=>item==='娜美')
console.log(findRes) // 娜美

const findIndexRes=_.findIndex(arr,(item,index)=>item==='娜美')
console.log(findIndexRes) // 5
