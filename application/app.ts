globalThis.l = console.log
const num1Input  = document.getElementById('input1') as HTMLInputElement;
const num2Input = document.getElementById('input2')as HTMLInputElement;
const button = document.getElementById('button') as HTMLButtonElement;


function add(a: number, b: number) {
  return a + b;
}

function printOutput(value): void {
  console.log(value);
}

// const result  = add(5, 13);
// let isDone = false
// printOutput(result)

const results: {result: number, print: ()=> void}[] = []
const names = ['Max']

button.addEventListener('click', function () {
  const num1 = +num1Input.value;
  const num2 = +num2Input.value;
  const result = add(num1, num2);
  const resultObj = {
    result: result,
    print() {
      console.log(this.result);
      
    }
  };
  results.push(resultObj);
  // results.push(5);

  printOutput(results);
  results[0].print();

});

