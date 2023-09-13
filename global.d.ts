export {};

declare global {
    
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
   
    }
  
    type CubaType = Banana | string | number;


    var michigan: <T>(param1: T) => void;
  
}
