/**
 * Created by cat on 2018/4/21.
 * 使用构造函数模式创建对象
 */


console.log("<>>>before this是 Window 类型吗？ " + (this instanceof Window));
function Person(name, age, job) {
    console.log("inner this是 Window 类型吗？ " + (this instanceof Window));
    console.log("inner this是 Person 类型吗？ " + (this instanceof Person));
    this.name = name;
    this.age = age;
    this.job = job;
    this.sayName = function () {
        return this.name;
    };
}
var p1 = new Person("Ann", 23, "actress");
console.log("outer this是 Window 类型吗？ " + (this instanceof Window));
console.log("outer this是 Person 类型吗？ " + (this instanceof Person));

// 在浏览器运行的输出结果如下

/**
 <pre>
 // todo: 在浏览器运行的输出结果如下 :
 <>>>before this是 Window 类型吗？ true
 inner this是 Window 类型吗？ false
 inner this是 Person 类型吗？ true
 outer this是 Window 类型吗？ true
 outer this是 Person 类型吗？ false
 </pre>
 */
