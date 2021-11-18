'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/* 
第二种暴露方式: 统一暴露
 */

var arr = [1, 2, 3];

function demo2() {
  console.log('我是module2里的demo2', arr);
}

function test2() {
  console.log('我是module2里的test2', arr);
}

exports.demo2 = demo2;
exports.test2 = test2;