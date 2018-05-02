/**
 * Created by cat on 2018/5/1.
 */

(function () {
    // 私有变量和函数
    var privateVar = 10;

    function privateFunc() {
        return privateVar % 2 === 0;
    }

    // 构造函数

    function MyObject() {
    }

    // 特权方法
    MyObject.prototype.publicMethod = function () {
        privateVar++;
        return privateFunc();
    }

})();