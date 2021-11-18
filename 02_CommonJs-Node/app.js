/* 
主文件 用于汇总各个文件
注意: 
1. 如果引入第三方的模块可以直接写模块名
2. 如果引入自定义模块必须写模块路径
 */

let module1 = require('./modules/module1');
let module2 = require('./modules/module2');
let module3 = require('./modules/module3');
let uniq = require('uniq');

console.log(module1.data);
module1.test();
module2.haha();
console.log(module3.piqi);
console.log(uniq([1, 2, 2, 4, 1, 123, 45, 2]));