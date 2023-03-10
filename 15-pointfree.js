/**
 * point free：不使用所要处理的值,只合成运算过程
 * Hello World =>hello_world
 */

const fp = require("lodash/fp");
const f = fp.flowRight(fp.replace(/\s+/g, "_"), fp.toLower);
console.log(f("Hello    World"));

console.log('--------------------------------');
/** 
 * 把一个字符串中的首字母提取并转换成大写，使用.作为分隔符
 * world wild web =>W.W.W
 */ 
// const firstLetterToUpper=fp.flowRight(fp.join('. '),fp.map(fp.first),fp.map(fp.toUpper),fp.split(' '))
const firstLetterToUpper=fp.flowRight(fp.join('. '),fp.map(fp.flowRight(fp.first,fp.toUpper) ),fp.split(' '))
console.log(firstLetterToUpper("world wild web"));