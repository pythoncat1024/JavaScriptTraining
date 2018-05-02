/**
 * Created by cat on 2018/4/27.
 * 组合继承 （原型链继承  + 借用函数模式）
 */

function SuperType(name) {
    this.name = name;
    this.colors = ['red', 'blue', 'green'];
    console.log("SuperType() 中的 this 是 SuperType? " + (this instanceof SuperType));
}

SuperType.prototype.sayName = function () {
    console.log(this.name);
};


function SubType(name, age) {
    SuperType.call(this, name); // --> this.colors = ['red','blue','green']
    this.age = age;
}

SubType.prototype = new SuperType();
SubType.prototype.constructor = SubType; // todo:

SubType.prototype.sayAge = function () {
    console.log(this.age);
    // 这里的 this 是谁？
    // 现在还看不出来，要看调用者，但是可以猜测，这个方法的调用者一定是一个 SubType 类型的对象，
    // 所以，这里的 this 就是一个 一个 SubType 类型的对象
};

var s1 = new SubType('Tom', 29);
s1.colors.push('black');
console.log(s1.colors);
s1.sayName();
s1.sayAge();


// var s2 = new SubType('Ann', 33);
// console.log(s2.colors);
// s2.sayName();
// s2.sayAge();