'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.demo1 = demo1;
exports.test1 = test1;
/* 
第一种暴露方式: 分别暴露
 */

var data = exports.data = 'aiguigu';

function demo1() {
  console.log('我是module1里的demo1', data.toUpperCase());
}

function test1() {
  console.log('我是module1里的test2', data.toLowerCase());
}