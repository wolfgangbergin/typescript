var tempKim = function (a) {
    console.log(a);
};
function add2(a, b) {
    return a + b;
}
function printOutput2(value) {
    console.log(value);
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
    results2.push(resultObj);
    printOutput2(results2);
    results2[0].print(10);
}
// wolfFunc();
tempKim(313);
