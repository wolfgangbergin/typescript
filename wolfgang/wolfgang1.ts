const cl: (...any) => void = console.log;


interface Greetable {
  name: string;
  age: number;
  permissions: string[];
}


class User2 {
  constructor(public name: string, private age: number) {}
  greet() {
    cl(`Hi, I am ${this.name}`);
  }
}

class Admin2 extends User2 {
  private permissions: string[];

  constructor(
    obj: { name: string; age: number; permissions: string[] },
    public password: string
  ) {
    super(obj.name, obj.age);
    this.permissions = obj.permissions;
  }
}

let kimbo: { name: string; age: number; permissions: string[] } = {
  name: 'kim',
  age: 31,
  permissions: ['sports', 'cooking'],
};

let kim = new Admin2(kimbo, '1234');

cl(kim.name, kim.password);
cl(kim);

//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////

function add2(a: number, b: number) {
  return a + b;
}

enum OutputMode2 {
  CONSOLE,
  ALERT,
}

function printOutput2(value, printMode: OutputMode2): void {
  printMode === OutputMode2.CONSOLE && console.log(value);
  printMode === OutputMode2.ALERT && console.log('alertW'.concat(value));
}

type CalculationResults2 = { result: number; print: (a: number) => void };

const results2: CalculationResults2[] = [];

function wolfFunc() {
  const num1 = 10;
  const num2 = 20;
  const result = add2(num1, num2);

  const resultObj: CalculationResults2 = {
    result: result,
    print(a: number) {
      console.log(this.result);
    },
  };

  // results2.push(resultObj);

  // results2[0].print(10);
  printOutput2(result, OutputMode2.CONSOLE);
  printOutput2(result, OutputMode2.ALERT);
}

// wolfFunc();
