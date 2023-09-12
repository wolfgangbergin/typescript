const cl = console.log;

type Banana = {
  name: string;
  age: number;
  permissions: string[];
};



interface Greetable2 {
  name: string;

  
}
interface Greet2 {
  greet: (a: number)=> void;
}

class User2 implements Greetable2, Greet2 {
  
  constructor(public name: string, private age: number) {
    
  }
  greet(a: number|string) {
    cl(`Hi, I am ${this.name} and ${a} years old`);
  }
}

class Admin2 extends User2 {
  private permissions: string[];

  constructor(
    obj: Banana,
    public password: string
  ) {
    super(obj.name, obj.age);
    this.permissions = obj.permissions;
  }
}

let kimbo: Banana = {
  name: 'kim',
  age: 31,
  permissions: ['sports', 'cooking'],
};

let kim = new Admin2(kimbo, '1234');

// cl(kim.name, kim.password);
// cl(kim);
// kim.greet('4');

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

function printOutput2(value: number, printMode: OutputMode2): void {
  printMode === OutputMode2.CONSOLE && console.log(value);
  printMode === OutputMode2.ALERT && console.log(`alert ${value}`);
}

interface CalculationResults3 {
  result: number;
  print: (a: number) => void;
}

const results2: Array<CalculationResults3> = [];

function wolfFunc() {
  const num1 = 10;
  const num2 = 23;
  const result = add2(num1, num2);

  const resultObj: CalculationResults3 = {
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

//  wolfFunc();

function logAndEcho2<T>(val: T) {
  // console.log(val);
  return val;
}



cl(logAndEcho2<string>('hi there').split(' '))
cl('wolfgang313')
cl('kim')
