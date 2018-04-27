/**
 * Created by cat on 2018/4/27.
 * 寄生构造模式
 *
 * 主要用来创建 包装类型的对象
 */

function SpecialArray() {

    var values = [];
    values.push.apply(values, arguments);

    values.toPipString = function () {
        // console.log("--"+this instanceof SpecialArray); // false
        // --> 这个 this 的类型是 Array 并不是 SpecialArray
        return this.join('|', values);
    };
    return values;

}

var sa = new SpecialArray('red', 'green', 'blue');
console.log(sa.toPipString());
