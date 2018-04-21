/**
 * Created by cat on 2018/4/22.
 * 为什么说使用构造函数创建对象一点要使用 new 操作符？
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
var p1 = Person("Ann", 23, "actress"); // 注意：这里没有 new
console.log("outer this是 Window 类型吗？ " + (this instanceof Window));
console.log("outer this是 Person 类型吗？ " + (this instanceof Person));

/*
 <pre>
 // todo: 在浏览器运行的输出结果如下 :
 <>>>before this是 Window 类型吗？ true
 inner this是 Window 类型吗？ true
 inner this是 Person 类型吗？ false
 outer this是 Window 类型吗？ true
 outer this是 Person 类型吗？ false
 </pre>
 */