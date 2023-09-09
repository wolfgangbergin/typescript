globalThis.l = console.log;
function add(a, b) {
    return a + b;
}
function printOutput(value) {
    console.log(value);
}
var results = [];
var names = ['Max'];
function wolfFunc() {
    var num1 = 10;
    var num2 = 20;
    var result = add(num1, num2);
    var resultObj = {
        result: result,
        print: function () {
            console.log(this.result);
        },
    };
    results.push(resultObj);
    printOutput(results);
    results[0].print();
}
wolfFunc();
