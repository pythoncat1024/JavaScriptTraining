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


var numbers = [2, 1, 3, 6, 4, 5, 7, 0];


var max = Math.max.apply({}, numbers);

console.log(max);

var colors = ["red", "blue", "green", "black", "white", "gray", "pink", "yellow"];

function chooseRandom(colors) {
    var index = Math.floor(Math.random() * colors.length);
    return colors[index];
}
console.log(chooseRandom(colors));