/**
 * Created by cat on 2018/4/19.
 *
 * 函数声明提升测试
 */


console.log(sum(1, 1)); // 这里输出 2
function sum(a, b) {

    return a + b;
}


console.log(add(3, 4));  // 这里会报错

var add = function (a, c) {
    return a + c;
};