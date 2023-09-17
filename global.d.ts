export {};

declare global {
  var wolfObject3: {
    CONSOLE: number;
    ALERT: number;
    WOLF: number;
  };

  var l: Function;
  var d: (...value: any) => void;

  type WolfMan = HTMLInputElement;

  interface Greetable {
    fName: string;
    age: number;
  }
  type kimbo = string | number;

  type Almost = Array<number | string>;

  type printMode = {
    fName: string;
    age: number | string;
    array1: kimbo[];
    array2: Array<kimbo>;
    print: (value: 313 | 212, value: wolfObject3) => void;
  };
}
