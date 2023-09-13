
const l = console.log;

import app2 from './app2.js'; app2;
import fla22 from './app3.js';


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
  name: string;
  greet(phrase: string): void;
}

interface Printable {
  print(): void;
}

class User implements Greetable, Printable {
  constructor(public name: string, private age: number) {}
  greet() {
    l(`Hi, I am ${this.name}`);
  }
  print(): void {
    l(this.name);
  }
}

class Admin extends User {
  constructor(name: string, age: number, private permissions: string[]) {
    super(name, age);
  }
}

const user = new User('Max', 30);

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

