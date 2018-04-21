/**
 * Created by cat on 2018/4/21.
 */

var book = {};

var props = {
    _year: {
        value: 2004
        , enumerable: true
    },
    edition: {
        value: 1
        // , enumerable: true
    },
    year: {
        set: function (val) {
            this._year = val;
            if (val > 2004) {
                this.edition += val - 2004;
            }
        },
        get: function () {
            return this._year
        }
        , enumerable: true
    }
};

console.log(props + " ### " + typeof props + " , " + Boolean(props));
Object.defineProperties(book, props);


for (var prop in book) {
    console.log(prop, book[prop]);
}

console.log("$$$$$$$$$$$$$$");
console.log("$$$$$$$$$$$$$$");
console.log("$$$$$$$$$$$$$$");

var descriptor = Object.getOwnPropertyDescriptor(book,"year");

for(prop in descriptor){

    console.log(prop, descriptor[prop]);
}