/* 
第一种暴露方式: module.exports = value;
 */

module.exports = {
  data: 'aigungu',

  test () {
    console.log(this.data);
  }
}