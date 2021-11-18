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