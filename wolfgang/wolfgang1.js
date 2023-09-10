var cl = console.log;
var kimbo = { name: 'kimbo', age: 31 };
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
    printMode === OutputMode2.ALERT && console.log('alertW'.concat(value));
}
var results2 = [];
function wolfFunc() {
    var num1 = 10;
    var num2 = 20;
    var result = add2(num1, num2);
    var resultObj = {
        result: result,
        print: function (a) {
            console.log(this.result);
        },
    };
    // results2.push(resultObj);
    // results2[0].print(10);
    printOutput2(result, OutputMode2.CONSOLE);
    printOutput2(result, OutputMode2.ALERT);
}
wolfFunc();
