/* 
第一种暴露方式: 分别暴露
 */

export let data = 'aiguigu';

export function demo1() {
  console.log('我是module1里的demo1', data.toUpperCase());
}

export function test1() {
  console.log('我是module1里的test2', data.toLowerCase())
}