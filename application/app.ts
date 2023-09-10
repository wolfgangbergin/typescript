const l: (any) => void = console.log;
const num1Input = document.getElementById('input1') as HTMLInputElement;
const num2Input = document.getElementById('input2') as HTMLInputElement;
const button = document.getElementById('button') as HTMLButtonElement;

function add(a: number, b: number) {
  return a + b;
}

type printMode = 'console' | 'alert';
enum OutputMode {
  CONSOLE,
  ALERT,
}

function printOutput(value: number | string, printMode: OutputMode): void {
  if (printMode === OutputMode.CONSOLE) {
    console.log(value);
  } else if (printMode === OutputMode.ALERT) {
    alert(value);
  }
}

// const result  = add(5, 13);
// let isDone = false
// printOutput(result)

type CalculationResults = { result: number; print: () => void };

const results: CalculationResults[] = [];
const names = ['Max'];

button.addEventListener('click', function () {
  const num1 = +num1Input.value;
  const num2 = +num2Input.value;
  const result = add(num1, num2);
  const resultObj: { result: number; print: () => void } = {
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
