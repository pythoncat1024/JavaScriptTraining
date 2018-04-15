/**
 * Created by cat on 2018/4/15.
 * 数组 sort() 的案例
 *
 * 通过实现比较函数，对一组元素进行排序，分数越高越靠前；分数相同，年龄越小越靠前；分数、年龄都相同，按名字进行字符串默认排序。
 */


var stu1 = {
    name: "python", age: 80, grade: 99,
    toString: function () {
        return this.name + " , " + this.age + " , " + this.grade;
    }
};
var stu2 = {
    name: "javascript", age: 30, grade: 88, toString: function () {
        return this.name + " , " + this.age + " , " + this.grade;
    }
};
var stu3 = {
    name: "php", age: 18, grade: 59, toString: function () {
        return this.name + " , " + this.age + " , " + this.grade;
    }
};
var stu4 = {
    name: "vb", age: 50, grade: 70, toString: function () {
        return this.name + " , " + this.age + " , " + this.grade;
    }
};
var stu5 = {
    name: "shell", age: 60, grade: 70, toString: function () {
        return this.name + " , " + this.age + " , " + this.grade;
    }
};
var stu6 = {
    name: "java", age: 40, grade: 99, toString: function () {
        return this.name + " , " + this.age + " , " + this.grade;
    }
};

var langArr = [stu1, stu2, stu3, stu4, stu5, stu6];

console.log("排序前：" + langArr);
console.log("-------------------");


function compare(a, b) {
    if (a.grade > b.grade) {
        return -5;
    } else if (a.grade === b.grade) {
        return 0;
    } else {
        return 5;
    }
} // todo:简单排序，仅仅通过分数进行排序

function cmp(a, b) {

    if (a.grade > b.grade) {
        return -5;
    } else if (a.grade === b.grade) {
        // return 0;
        if (a.age < b.age) {
            return -4;
        } else if (a.age === b.age) {
            return a.name.localeCompare(b.name);
        } else {
            return 4;
        }
    } else {
        return 5;
    }
} // todo:复杂排序，先比较分数，然后是年龄，最后是名字字符串

// langArr.sort(compare);
langArr.sort(cmp);

console.log("排序后：" + langArr);
