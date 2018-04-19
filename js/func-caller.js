/**
 * Created by cat on 2018/4/19.
 */


function outer() {
    inner();
}

function inner() {
    console.log("arguments.callee==[" + arguments.callee + "] , this==[" + this + "] , caller==[" + arguments.callee.caller + "]");
}

outer(); // 输出 null , outer

var obj = {};

obj.inner = inner;

// obj.inner();  // 输出  null