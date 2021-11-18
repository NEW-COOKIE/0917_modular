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