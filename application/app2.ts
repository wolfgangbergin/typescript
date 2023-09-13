declare global {
    function someFunction(): string;
    var someVariable: string;
    var l: Function;
}

let mich = 313;


interface Banana {
    name: string | number;
   
    }
  
    type CubaType = Banana | string | number;

const kimbo: Array<CubaType> = [{name: 'kimbo'},  'wolf' , mich];


globalThis.l = console.log
globalThis.someFunction = () => "some value";
globalThis.someVariable = "some value313";

l(someVariable, 313)

// const wolfgang: Banana = {name: 313};
// globalThis.wolfgang = wolfgang; 
// console.log(wolfgang)

export default 'app2';
