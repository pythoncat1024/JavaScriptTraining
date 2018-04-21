/**
 * Created by cat on 2018/4/21.
 */
/**
 * 使用工厂方法创建对象
 * @param name
 * @param age
 * @param job
 * @returns {{}}
 */
function createPerson(name, age, job) {
    // var person = {};
    var person = new Object();
    person.name = name;
    person.age = age;
    person.job = job;
    person.sayName = function () {
        console.log(person.name);
    };
    return person;
}

var a = createPerson("小明", 29, "鸭子");
var b = createPerson("小红", 27, "母鸡");

console.log(a.valueOf());
console.log("con  " + a.constructor.valueOf());
console.log(b.valueOf());

console.log(a instanceof Object);

