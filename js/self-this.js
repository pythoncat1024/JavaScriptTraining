/**
 * Created by cat on 2018/4/19.
 */


color1 = "red";

function printColor() {

    console.log(this.color1);
}

var obj = {color1: "black"};

printColor(); // red

obj.printColor = printColor;

obj.printColor(); // black