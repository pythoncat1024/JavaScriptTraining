/**
 * Created by cat on 2018/4/19.
 *
 * 函数作为值来使用
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
var stu7 = {
    name: "z++", age: 3, grade: 45, toString: function () {
        return this.name + " , " + this.age + " , " + this.grade;
    }
};
var langArr = [stu1, stu2, stu3, stu4, stu5, stu6, stu7];

function compareWithProp(propName) {

    // 倒序， 从大到小。。
    return function (obj1, obj2) {
        var prop1 = obj1[propName];
        var prop2 = obj2[propName];

        if (prop1 > prop2) {
            return -1;
        } else if (prop1 < prop2) {
            return 1;
        } else {
            return 0;
        }
    };
}

console.log("before:\t" + langArr);
// console.log(langArr.concat()+"\t#|#>>>>>>>><"); // 创建一个副本
console.log("after:\t" + langArr);
langArr.sort(compareWithProp("name"));
