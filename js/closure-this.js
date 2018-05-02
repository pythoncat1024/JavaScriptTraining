/**
 * Created by cat on 2018/4/30.
 * this 对象
 */



name = 'Ann';
var obj = {
    name: 'Rose',
    getName: function () {
        return this.name;
    }
};

console.log(obj.getName()); // Rose
console.log("aaa " + (obj.getName)()); // Rose
console.log("bbb " + (obj.getName = obj.getName)()); // Ann


name = 'Ann';
var obj = {
    name: 'Rose',
    getName: function () {
        // other = this;
        return function () {
            return this.name;
        };
    }
};

console.log(obj.getName()()); // Ann

console.log(obj.getName().call(obj)); // Rose
// --> 通过 call，或者 apply ，主动改变函数的执行环境也是可以的~


name = 'Ann';
var obj = {
    name: 'Rose',
    getName: function () {
        other = this;
        return function () {
            return other.name;
        };
    }
};

console.log(obj.getName()()); // Rose
// --> 或者主动使用内部 this 的值 ~