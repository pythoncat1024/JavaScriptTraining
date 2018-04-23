/**
 * Created by cat on 2018/4/23.
 *
 * 动态原型模式
 */

/** <pre>

 // todo: 错误示例!,原型动态模式中如果重写原型，会切断构造函数与原型直接的连接。
 // ---> 构造函数连接的原型，依然是最初自动创建的原型
 function Person(name, age) {
    this.name = name;
    this.age = age;
    if (typeof this.sayName !== 'function') {
        Person.prototype = {
            constructor: Person,
            sayName: function () {
                console.log(this.name);
            },
            sayHi: function () {
                console.log('Hi')
            },
            friends: ['Dogs', 'Cats']
        }
    }
}

 var p1 = new Person('Tom', 23);
 var p2 = new Person();

 console.log(Object.getPrototypeOf(p1)); // {constructor: ƒ}
 p1.sayName();  // TypeError: p1.sayName is not a function
 // p2.sayName();
 </pre>
 */

function Person(name, age) {
    this.name = name;
    this.age = age;

    if (typeof this.sayName !== 'function') {
        Person.prototype.sayName = function () {
            console.log(this.name);
        };
        Person.prototype.sayHi = function () {
            console.log('Hi');
        };
        Person.prototype.friends = ['Dogs', 'Cats'];
    }
}

var p1 = new Person('Tom', 23);
var p2 = new Person();

console.log(Object.getPrototypeOf(p1)); // {constructor: ƒ}
p1.sayName();  // TypeError: p1.sayName is not a function
p2.sayName();
