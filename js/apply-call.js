/**
 * Created by cat on 2018/4/19.
 */

var red = {color: "red"};
var black = {color: "black"};

function printColor() {
    console.log(this.color); // 注意，这里用到了this
}

printColor.call(red);
// 输出 RED
printColor.call(black);
// 输出 BLACK
