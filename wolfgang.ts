globalThis.l = console.log
const wolfMan = (cbf: Function, param2: number):void =>{
  let temp1 = cbf()
   globalThis.l(temp1 * param2)
}

const kimbo: Function = (cbf: Function):number =>{
    return 100
    }

wolfMan(kimbo, 100)


