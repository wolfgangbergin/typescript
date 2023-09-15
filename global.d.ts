export {};

declare global {
 enum OutputMode {
    CONSOLE,
    ALERT
  }

  var jojo: Apple;
    
  interface Kim {
    fName: string;
    mich: number; 
  }
  
  function someFunction(): string;
  var someVariable: string;
  var l: Function;
  var d: (...value: any) => void;
  var kim: Kim, Mich;
 

  interface Banana {
    name: string | number;
    age?: number;
    }
    interface Cuba {
      age: number;
    }
 
  type Number = 313

    type TestBoolean = true | false;
  
    type CubaType = Banana | string | Cuba | TestBoolean | Number;


    var michigan: <T>(param1: T) => void;

    type Apple = Array<CubaType>

    type WolfMan = HTMLInputElement
  
}
