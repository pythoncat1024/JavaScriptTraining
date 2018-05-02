/**
 * Created by cat on 2018/4/30.
 *
 * 模拟块级作用域 --（利用匿名函数）
 */

function outputNumbers(count) {

    (function () {
        for (var i = 0; i < count; i++) {
            console.log(i);
        }
    })();
    // console.log(i); // 报错：ReferenceError: i is not defined
}

// outputNumbers(5);

(function test(name, age) {
    console.log(name + "\t" + age);
})('张飞', '29');