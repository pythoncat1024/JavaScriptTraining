function sayHi() {
    alert("hi " + arguments[0] + " , " + arguments[1]);
}

sayHi('张飞', '你最近在干啥？');


function howManyArgs() {
    console.log('显示实际参数的个数：' + arguments.length);
}


howManyArgs('1', '2', 3, 4, 'build your dream');

var person = new Object();

function setname(obj) {
    obj.name = '张飞';
    obj = new Object();
    obj.name = '王菲';
}

setname(person);

console.log(person.name); // 张飞

// ##################################


var color = 'blue';
function changeColor() {
    var anotherColor = "red";

    function swapColor() {
        var tempColor = anotherColor;
        anotherColor = color;
        color = tempColor;
        // 这里可以访问color,anotherColor,tempColor
    }

    swapColor();
    // 这里可以访问color,anotherColor, 但不能访问 tempColor
}
// 这里能访问color , 但不能访问 anotherColor 和 tempColor.

console.log(color);


function displayInfo(args) {
    var info = "";
    if (typeof args.name === "string") {
        info += "Name: " + args.name;
    }
    if (typeof args.age === "number") {
        info += "Age: " + args.age;
    }

    console.log("arg===>" + info);
}

displayInfo({name: "张飞", age: 33});
displayInfo({name: "王菲"});
displayInfo({name: "北条麻妃", age: 38, "job": "actress"});


var slave = {"first name": "stone", "last name": "Jack", "age": 22};

console.log(slave['first name'] + " , " + slave.age);


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
}
"".localeCompare("");
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
}
langArr.sort(cmp);

console.log("排序后：" + langArr);
