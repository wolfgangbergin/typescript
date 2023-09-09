

function add(a: number, b: number) {
  return a + b;
}

function printOutput(value): void {
  console.log(value);
}



const results: { result: number; print: () => void }[] = [];
const names = ['Max'];

function wolfFunc() {
  const num1 = 10;
  const num2 = 20;
  const result = add(num1, num2);
  const resultObj: {result: number} = {
    result: result,
    print() {
      console.log(this.result);
    },
  };
  results.push(resultObj);

  printOutput(results);
  results[0].print();
}
wolfFunc();
