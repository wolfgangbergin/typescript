globalThis.l = console.log
let wolf = function(cbf: Function):number{
  let temp1 = cbf()
    return temp1 * 2
}

let kim = function(cbf: Function):number{
    return 10
    }

globalThis.l(wolf(kim))
