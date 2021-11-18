/* 
第二种暴露方式: exports.xxx = value
 */

let str = 'aiguigu';

exports.haha = function () {
  console.log(`我是${str.toLowerCase()}`);
}