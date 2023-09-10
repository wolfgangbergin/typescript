var l = console.log;
var num1Input = document.getElementById('input1');
var num2Input = document.getElementById('input2');
var button = document.getElementById('button');
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
var results = [];
var names = ['Max'];
button.addEventListener('click', function () {
    var num1 = +num1Input.value;
    var num2 = +num2Input.value;
    var result = add(num1, num2);
    var resultObj = {
        result: result,
        print: function () {
            console.log(this.result);
        },
    };
    results.push(resultObj);
    // results.push(5);
    //   results[0].print();
    printOutput(result, OutputMode.CONSOLE);
    printOutput(result, OutputMode.ALERT);
});
