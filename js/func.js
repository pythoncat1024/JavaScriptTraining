function sayHi() {
    alert("hi " + arguments[0] + " , " + arguments[1]);
}

sayHi('张飞', '你最近在干啥？');


function howManyArgs() {
    console.log('显示实际参数的个数：' + arguments.length);
}


howManyArgs('1', '2', 3, 4, 'build your dream');

var person = new Object();

function setname(obj) {
    obj.name = '张飞';
    obj = new Object();
    obj.name = '王菲';
}

setname(person);

console.log(person.name); // 张飞

// ##################################


var color = 'blue';
function changeColor() {
    var anotherColor = "red";

    function swapColor() {
        var tempColor = anotherColor;
        anotherColor = color;
        color = tempColor;
        // 这里可以访问color,anotherColor,tempColor
    }

    swapColor();
    // 这里可以访问color,anotherColor, 但不能访问 tempColor
}
// 这里能访问color , 但不能访问 anotherColor 和 tempColor.

console.log(color);