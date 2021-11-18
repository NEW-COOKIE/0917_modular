/* 
第二种暴露方式: 统一暴露
 */

let arr = [1, 2, 3];

function demo2() {
  console.log('我是module2里的demo2', arr);
}

function test2() {
  console.log('我是module2里的test2', arr);
}

export {demo2, test2};