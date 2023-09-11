var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var cl = console.log;
var User2 = /** @class */ (function () {
    function User2(name, age) {
        this.name = name;
        this.age = age;
    }
    User2.prototype.greet = function () {
        cl("Hi, I am ".concat(this.name));
    };
    return User2;
}());
var Admin2 = /** @class */ (function (_super) {
    __extends(Admin2, _super);
    function Admin2(obj, password) {
        var _this = _super.call(this, obj.name, obj.age) || this;
        _this.password = password;
        _this.permissions = obj.permissions;
        return _this;
    }
    return Admin2;
}(User2));
var kimbo = {
    name: 'kim',
    age: 31,
    permissions: ['sports', 'cooking'],
};
var kim = new Admin2(kimbo, '1234');
cl(kim.name, kim.password);
cl(kim);
//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////
function add2(a, b) {
    return a + b;
}
var OutputMode2;
(function (OutputMode2) {
    OutputMode2[OutputMode2["CONSOLE"] = 0] = "CONSOLE";
    OutputMode2[OutputMode2["ALERT"] = 1] = "ALERT";
})(OutputMode2 || (OutputMode2 = {}));
function printOutput2(value, printMode) {
    printMode === OutputMode2.CONSOLE && console.log(value);
    printMode === OutputMode2.ALERT && console.log('alertW'.concat(value));
}
var results2 = [];
function wolfFunc() {
    var num1 = 10;
    var num2 = 20;
    var result = add2(num1, num2);
    var resultObj = {
        result: result,
        print: function (a) {
            console.log(this.result);
        },
    };
    // results2.push(resultObj);
    // results2[0].print(10);
    printOutput2(result, OutputMode2.CONSOLE);
    printOutput2(result, OutputMode2.ALERT);
}
// wolfFunc();
