/**
 * Created by cat on 2018/4/27.
 *
 * 原型链的基本概念
 */

function Apple(name) {
    this.name = name;
    this.friends = ['cats'];
}

Apple.prototype.sayName = function () {
    console.log(this.name);
};

function Banana(name) {
    this.name = name;
}

Banana.prototype = new Apple('苹果');

Banana.prototype.constructor = Banana;

function Cherry(name) {
    this.name = name;
}

Cherry.prototype = new Banana('香蕉');
Cherry.prototype.constructor = Cherry;

var ch = new Cherry('樱桃');
console.log(ch);

var c2 = new Cherry('桃子🍑');
ch.friends.push('dogs');

console.log(c2);
console.log("ch:" + ch.friends + " #### c2:" + c2.friends);
