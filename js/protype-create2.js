/**
 * Created by cat on 2018/4/22.
 */

function Panda() {
}
Panda.prototype = {
    // constructor: Panda,
    name: "Ann",
    'age': 5,
    job: 'actress'
};

Object.defineProperty(Panda.prototype, "constructor", {
    enumerable: false,
    value: Panda
});
var p1 = new Panda();
console.log(p1.constructor === Panda); // false
console.log(Panda.constructor); // false

function Lemon() {

}

Lemon.prototype.name = 'rose';
Lemon.prototype.job = 'writer';

var m = new Lemon();

console.log(m.constructor === Lemon); // true