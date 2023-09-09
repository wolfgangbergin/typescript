const tempKim: Function = (a: number) => {
console.log(a);
}

function add2(a: number, b: number) {
  return a + b;
}

function printOutput2(value): void {
  console.log(value);
}



const results2: { result: number; print: (a: number) => void }[] = [];


function wolfFunc() {
  const num1 = 10;
  const num2 = 20;
  const result = add2(num1, num2);

  const resultObj: { result: number; print: (a: number) => void } = {
    result: result,
    print(a: number) {
      console.log(this.result);
    },
  };
  
  results2.push(resultObj);

  printOutput2(results2);
  results2[0].print(10);
}
// wolfFunc();
tempKim(313);
