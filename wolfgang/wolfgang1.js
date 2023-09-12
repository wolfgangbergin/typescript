"use strict";
const cl = console.log;
class User2 {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet(a) {
        cl(`Hi, I am ${this.name} and ${a} years old`);
    }
}
class Admin2 extends User2 {
    password;
    permissions;
    constructor(obj, password) {
        super(obj.name, obj.age);
        this.password = password;
        this.permissions = obj.permissions;
    }
}
let kimbo = {
    name: 'kim',
    age: 31,
    permissions: ['sports', 'cooking'],
};
let kim = new Admin2(kimbo, '1234');
// cl(kim.name, kim.password);
// cl(kim);
// kim.greet('4');
//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////
function add2(a, b) {
    return a + b;
}
var OutputMode2;
(function (OutputMode2) {
    OutputMode2[OutputMode2["CONSOLE"] = 0] = "CONSOLE";
    OutputMode2[OutputMode2["ALERT"] = 1] = "ALERT";
})(OutputMode2 || (OutputMode2 = {}));
function printOutput2(value, printMode) {
    printMode === OutputMode2.CONSOLE && console.log(value);
    printMode === OutputMode2.ALERT && console.log(`alert ${value}`);
}
const results2 = [];
function wolfFunc() {
    const num1 = 10;
    const num2 = 23;
    const result = add2(num1, num2);
    const resultObj = {
        result: result,
        print(a) {
            console.log(this.result);
        },
    };
    // results2.push(resultObj);
    // results2[0].print(10);
    printOutput2(result, OutputMode2.CONSOLE);
    printOutput2(result, OutputMode2.ALERT);
}
//  wolfFunc();
function logAndEcho2(val) {
    // console.log(val);
    return val;
}
cl(logAndEcho2('hi there').split(' '));
cl('wolfgang313');
cl('kim');
