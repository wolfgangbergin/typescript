export {};

declare global {
 

 enum OutputMode {
    CONSOLE,
    ALERT
  }


  type Jojo = (a:string)=>string;
    
  interface Kim {
    fName: string;
    age: number;
   print(value:string):string;
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

    type Address = (...value: any)=>void;
 
  type Number = 313

    type TestBoolean = true | false;
  
    type CubaType = Banana | string | Cuba | TestBoolean | Number;


    var michigan: <T>(param1: T) => void;

    type Apple = Array<CubaType>

    type WolfMan = HTMLInputElement

  type Almost = Kim[] & number[] & string[]

  type Redford = (string | number | Kim)[]

  type PromiseType = Array<Kim | number | string>
    
 
}
