globalThis.l = console.log;
var wolfMan = function (cbf, param2) {
    var temp1 = cbf();
    globalThis.l(temp1 * param2);
};
var kimbo = function (cbf) {
    return 100;
};
wolfMan(kimbo, 100);
