/**
 * Created by cat on 2018/4/18.
 */
var names = ["php", 33, "python", "java", "shell", "golang", 77];

function isString(item, index, array) {
    return (typeof item === "string")
}

function plus(item, index, array) {
    console.log(item, index, array);
    return item + "{#}";
}

console.log(names.map(plus));