/**
 * Created by cat on 2018/4/27.
 * 借用构造函数模式
 */


function SuperType() {
    this.colors = ['red', 'blue', 'green'];
}

function SubType() {

    SuperType.call(this); // 这里的 this 是什么？ 当然是 SubType 类型的对象
}

var instance = new SubType();
instance.colors.push('black');
console.log(instance.colors); // [ 'red', 'blue', 'green', 'black' ]

var instance2 = new SubType();
console.log(instance2.colors); // [ 'red', 'blue', 'green' ]

