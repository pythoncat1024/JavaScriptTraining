/**
 * Created by cat on 2018/4/23.
 *
 * 组合模式：原型模式+ 构造函数模式 的混合体 （主流的自定义引用类型 的方式）
 */

function Person(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
}

Person.prototype = {
    constructor: Person,
    sayName: function () {
        console.log(this.name);
    },
    friends: ['Dogs', 'Cats']
};

var p1 = new Person('Rose', 29, 'writer');
var p2 = new Person('Ann', 29, 'actress');

p1.sayName();
p2.sayName();
console.log(p1);
console.log(p2);
console.log(p1.friends);
