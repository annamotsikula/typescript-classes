// console.log('Hello');
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
// var num = 12;
// let & const 
//immutable mutable 
var num = 12;
var str = 'Typescript';
var myBool = true;
myBool = false;
// console.log(myBool)
var anyType = 10;
var myNumber = 9;
var ingredients = {
    tomato: 8,
    cheese: 10
};
ingredients.cheese = 20;
var today = {
    weekday: 'Monday',
    month: 10,
    year: 2022,
    day: 31
};
function printToday(object) {
    // console.log(object.weekday);
    return "Today is ".concat(object.day);
}
var dateToday = printToday(today);
// console.log(dateToday)
var Plane = /** @class */ (function () {
    function Plane(nx, ny) {
        this.x = nx;
        this.y = ny;
    }
    Plane.prototype.print = function () {
        console.log("x is: ".concat(this.x, ", y is: ").concat(this.y));
    };
    Plane.prototype.add = function (points2D) {
        this.x += points2D.x;
        this.y += points2D.y;
    };
    Plane.prototype.create = function (points2D) {
        this.x += points2D.x;
        this.y += points2D.y;
        return new Plane(this.x, this.y);
    };
    return Plane;
}());
var a1 = new Plane(2, 3);
var a2 = new Plane(-4, 0);
a1.add(a2);
// inheritance
var Space = /** @class */ (function (_super) {
    __extends(Space, _super);
    function Space(x, y, z) {
        var _this = _super.call(this, x, y) || this;
        _this.z = z;
        return _this;
    }
    Space.prototype.print = function () {
        console.log("x is: ".concat(this.x, ", y is: ").concat(this.y, ", z is: ").concat(this.z));
    };
    Space.prototype.create = function (points3D) {
        var coordinates = _super.prototype.create.call(this, points3D);
        return new Space(coordinates.x, coordinates.y, this.z + points3D.z);
    };
    return Space;
}(Plane));
var b1 = new Space(1, 2, 3);
b1.print();
var b2 = new Space(4, 5, 6);
console.log(b1.create(b2));
