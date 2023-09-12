"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const l = console.log;
l('Hello from app.ts');
class User {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        l(`Hi, I am ${this.name}`);
    }
    print() {
        l(this.name);
    }
}
class Admin extends User {
    permissions;
    constructor(name, age, permissions) {
        super(name, age);
        this.permissions = permissions;
    }
}
const user = new User('Max', 30);
const num1Input = document.getElementById('input1');
const num2Input = document.getElementById('input2');
const button = document.getElementById('button');
function add(a, b) {
    return a + b;
}
var OutputMode;
(function (OutputMode) {
    OutputMode[OutputMode["CONSOLE"] = 0] = "CONSOLE";
    OutputMode[OutputMode["ALERT"] = 1] = "ALERT";
})(OutputMode || (OutputMode = {}));
function printOutput(value, printMode) {
    if (printMode === OutputMode.CONSOLE) {
        console.log(value);
    }
    else if (printMode === OutputMode.ALERT) {
        alert(value);
    }
}
const results = [];
const names = ['Max'];
button.addEventListener('click', function () {
    const num1 = +num1Input.value;
    const num2 = +num2Input.value;
    const result = add(num1, num2);
    const resultObj = {
        result: result,
        print() {
            console.log(this.result);
        },
    };
    results.push(resultObj);
    // results.push(5);
    //   results[0].print();
    printOutput(result, OutputMode.CONSOLE);
    printOutput(result, OutputMode.ALERT);
});
function logAndEcho(val) {
    console.log(val);
    return val;
}
logAndEcho('Hi there').split('      ');
