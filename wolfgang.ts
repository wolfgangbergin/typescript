globalThis.l = console.log
let wolf = function(cbf: Function):number{
  let temp1 = cbf()
    l( temp1 * 10)
}

let kim = function(cbf: Function):number{
    return 10
    }

