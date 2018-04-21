/**
 * Created by cat on 2018/4/21.
 */


var book = {
    _year: 2004,
    edition: 1
};
book.price = 1024.4;

// 定义访问器属性 year
Object.defineProperty(book, "year", {
    set: function (val) {
        this._year = val;
        if (val > 2004) {
            this.edition += val - 2004;
        }
    },
    get: function () {
        return this._year;
    },

    enumerable: true
});

book.year = 2018; // 定义完成就可以调用 该属性了
console.log(book.year + " , " + book.edition);

book._year = 2028;
console.log(book._year + " , " + book.edition);


for (var prop in book) {

    console.log("prop: " + prop);
}