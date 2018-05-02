/**
 * Created by cat on 2018/4/30.
 * 闭包 大雾
 */


/*// 问题闭包
 function createFuncArr() {
 var result = [];

 for (var i = 0; i < 10; i++) {
 result[i] = function () {
 return i + 100;
 };
 }

 return result;
 }

 var funcArr = createFuncArr();

 for (var index = 0; index < funcArr.length; index++) {
 console.log(funcArr[index]());
 }*/

/*
 // 非闭包的解决方案
 function createFuncArr() {
 var result = [];

 for (var i = 0; i < 10; i++) {
 result[i] = function (index) {
 return index + 100;
 };
 }

 return result;
 }

 var funcArr = createFuncArr();

 for (var index = 0; index < funcArr.length; index++) {
 console.log(funcArr[index](index));
 }
 */


// 闭包的解决方式：
/*
 function createFuncArr() {
 var result = [];

 for (var i = 0; i < 10; i++) {
 result[i] = function (index) {
 return function () {
 return index + 100;
 }
 }(i);
 }

 return result;
 }
 */


function createFuncArr() {
    var result = [];

    for (var i = 0; i < 10; i++) {
        result[i] = function (index) {
            return i + 100;
        };
    }

    return result;
}

var funcArr = createFuncArr();

for (var index = 0; index < funcArr.length; index++) {
    console.log(funcArr[index]());
}
