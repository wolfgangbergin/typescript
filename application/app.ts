//reset
//1
//2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
 export {app2} from './app2.js'; 
import fla22 from './app3.js';
d(kim)
//michigan<number>(313);

// console.log(fla22<string>('cuba').toUpperCase());

// class User {
//   name: string;
//   private age: number;
//   constructor(name: string, age: number) {
//     this.name = name;
//     this.age = age;
//   }
//   greet() {
//     l(`Hi, I am ${this.name}`);
//   }
// }

interface Greetable {
  fName: string;
  greet(phrase: string): void;
}

interface Printable {
  print(): void;
}

class User implements  Greetable, Printable {
  constructor(public fName: string, private age: number) {}
  greet() {
    l(`Hi, I am ${this.fName}`);
  }
  print(): void {
    l(this.fName);
  }
}

class Admin extends User {
  constructor(fName: string, age: number, private permissions: string[]) {
    super(fName, age);
  }
}

const user = new Admin('Max', 30, ['create-server']);

const num1Input = document.getElementById('input1') as HTMLInputElement;
const num2Input = document.getElementById('input2') as HTMLInputElement;
const button = document.getElementById('button')!;

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


interface CalculationContainer {
  result: number;
  print(): void;
}



type CalculationResults = CalculationContainer;

const results: Array<CalculationResults> = [];

const names = ['Max'];

button.addEventListener('click', function () {
  const num1 = +num1Input.value;
  const num2 = +num2Input.value;
  const result = add(num1, num2);
  const resultObj: CalculationResults = {
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


function logAndEcho<T>(val: T) {
  console.log(val);
  return val;
}

