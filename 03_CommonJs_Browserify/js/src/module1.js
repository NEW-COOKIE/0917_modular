/* 
第一种暴露方式: module.exports = value;
 */

module.exports = {
  data: 'aiguigu',
  demo() {
    console.log(`我是${this.data.toUpperCase()}`);
  }
}
