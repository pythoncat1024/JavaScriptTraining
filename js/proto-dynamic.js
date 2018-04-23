/**
 * Created by cat on 2018/4/23.
 * 原型的动态性
 */

function Person() {

}

var p1 = new Person();

Person.prototype.sayHi = function () {
    console.log("Hi");
};

p1.sayHi();

// function Person(){}
// var p1 = new Person();
// Person.prototype = {
//     sayHi: function(){
//         console.log('Hi');
//     }
// };
// p1.sayHi(); // TypeError: p1.sayHi is not a function
function Person(){}

Person.prototype.colors = ['red'];

var p1 = new Person();
p1.colors.push('blue');
console.log(p1.colors);

var p2 = new Person();
console.log(p2.colors);


console.log(p1 instanceof Person);