var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var shapecontainer;
document.addEventListener('DOMContentLoaded', function () {
    shapecontainer = document.getElementById('shapecontianer');
    var Shape = /** @class */ (function () {
        function Shape() {
            var _this = this;
            this.div = document.createElement('div');
            this.div.addEventListener('click', function () {
                document.createElement('div');
            });
            this.div.addEventListener('dblclick', function () {
                _this.div.remove();
            });
            shapecontainer.appendChild(this.div);
        }
        return Shape;
    }());
    var square = /** @class */ (function (_super) {
        __extends(square, _super);
        function square() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return square;
    }(Shape));
    var rectangle = /** @class */ (function (_super) {
        __extends(rectangle, _super);
        function rectangle() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return rectangle;
    }(Shape));
    var circle = /** @class */ (function (_super) {
        __extends(circle, _super);
        function circle() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return circle;
    }(Shape));
    var triangle = /** @class */ (function (_super) {
        __extends(triangle, _super);
        function triangle() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return triangle;
    }(Shape));
});
