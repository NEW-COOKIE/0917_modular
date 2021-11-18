(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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
},{"./module1":2,"./module2":3,"./module3":4}],2:[function(require,module,exports){
/* 
第一种暴露方式: module.exports = value;
 */

module.exports = {
  data: 'aiguigu',
  demo() {
    console.log(`我是${this.data.toUpperCase()}`);
  }
}

},{}],3:[function(require,module,exports){
/* 
第二种暴露方式: exports.xxx = value
 */

let str = 'aiguigu';

exports.haha = function () {
  console.log(`我是${str.toLowerCase()}`);
}
},{}],4:[function(require,module,exports){
/* 
 */

exports.arr = [1, 2, 3, 4];
},{}]},{},[1]);
