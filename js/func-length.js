/**
 * Created by cat on 2018/4/19.
 */

function sum(num1, num2) {
    console.log("arg len==" + arguments.length); // 5
    return num1 + num2;
}


var s = sum(1, 2, 3, 4, 5);

console.log(" ### " + sum.length + " ## " + sum.arguments); // 2  null