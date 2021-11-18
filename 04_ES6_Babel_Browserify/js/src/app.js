/* 
合并: 用于汇总各个模块
*/

import { data, demo1, test1 } from './module1';
import { demo2, test2} from './module2';
import module3 from './module3';

console.log(data);
demo1();
test1();

demo2();
test2();

module3.speak();