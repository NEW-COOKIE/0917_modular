/*
主文件: 用于汇总各个文件
*/

let module1 = require('./module1');
let module2 = require('./module2');
let module3 = require('./module3');

console.log(module1.data);
module1.demo();

module2.haha();

console.log(module3.arr);