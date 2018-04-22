/**
 * Created by cat on 2018/4/22.
 * 原型模式
 */

function Panda() {
    this.age = 3;
}

Panda.prototype.username = "Ann";
Panda.prototype.age = 6;

var p1 = new Panda();

p1.gender = 'female';
console.log(p1.hasOwnProperty('gender')); // true
console.log(p1.hasOwnProperty('username')); // false
console.log(p1.hasOwnProperty('username')); // true
function onlyInPrototype(obj, propName) {
    return (propName in obj)
        && !obj.hasOwnProperty(propName);
}

function onlyInInstance(obj, propName) {
    return obj.hasOwnProperty(propName)
        && !( propName in obj.constructor.prototype);
}


console.log(p1.hasOwnProperty('age')); // true


// in 说明该属性存在 ，hasOwnProperty 说明存在于实例中

// console.log("xx " + p1.constructor.prototype);
// p1.username = "Rose";

console.log("prop--->  " + onlyInPrototype(p1, 'username'));
console.log("prop---> | " + onlyInInstance(p1, 'username'));

// p1.username = "Rose";
console.log("x prop---> | " + onlyInInstance(p1, 'username'));

console.log("z prop--->  " + onlyInPrototype(p1, 'username'));


console.log("abcde  " + Object.keys(p1)); // abcde  age,gender,username、、


console.warn(Object.getOwnPropertyNames(p1));
console.warn(Object.getOwnPropertyNames(Panda));
console.warn(Object.getOwnPropertyNames(Panda.prototype));