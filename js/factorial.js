/**
 * Created by cat on 2018/4/19.
 */


function factorial(num) {
    if (num <= 1) {
        return 1;
    } else {
        return num * factorial(num - 1);
    }
}


function factorial(num) {
    if (num <= 1) {
        return 1;
    } else {
        return num * arguments.callee(num - 1);
    }
}
var f2 = factorial;

factorial = function () {
    return 0
};

console.log(f2(5));

console.log(factorial(5));


var factorial = function f(num) {
    if (num <= 1) {
        return 1;
    } else {
        return num * f(num - 1);
    }
};

console.log(factorial(6));
var af = factorial;
console.log(af(7));

