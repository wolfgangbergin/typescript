globalThis.l = console.log;
var num1Input = document.getElementById('input1');
var num2Input = document.getElementById('input2');
var button = document.getElementById('button');
function add(a, b) {
    return a + b;
}
function printOutput(value) {
    console.log(value);
}
// const result  = add(5, 13);
// let isDone = false
// printOutput(result)
var results = [];
button.addEventListener('click', function () {
    var num1 = +num1Input.value;
    var num2 = +num2Input.value;
    var result = add(num1, num2);
    var resultObj = {
        result: result,
    };
    results.push(resultObj);
    printOutput(results);
});
