/**
 * Created by cat on 2018/4/21.
 *
 * 函数的`bind()`方法。这个方法会创建一个函数实例，其`this`值会绑定到传给`bind()`函数的值。
 */

color = "red";
var obj = {color: "blue"};
function sayColor() {
    return this.color;
}

anotherSay = sayColor.bind(obj);

anotherSay(); // blue
sayColor(); // red

console.log(this);