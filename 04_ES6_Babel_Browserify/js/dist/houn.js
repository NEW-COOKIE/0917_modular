(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

var _module = require('./module1');

var _module2 = require('./module2');

var _module3 = require('./module3');

var _module4 = _interopRequireDefault(_module3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.log(_module.data); /* 
                           合并: 用于汇总各个模块
                           */

(0, _module.demo1)();
(0, _module.test1)();

(0, _module2.demo2)();
(0, _module2.test2)();

_module4.default.speak();
},{"./module1":2,"./module2":3,"./module3":4}],2:[function(require,module,exports){
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
},{}],3:[function(require,module,exports){
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
},{}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/* 
第三种暴露方式: 默认暴露
 */

exports.default = {
  name: 'xiaomng',
  age: 18,

  speak: function speak() {
    console.log('\u6211\u7684\u540D\u5B57\u53EB' + this.name + ', \u6211\u4ECA\u5E74' + 18 + '\u5C81');
  }
};
},{}]},{},[1]);
