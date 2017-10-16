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
var value = document.getElementById("value");
document.addEventListener('DOMContentLoaded', function () {
    shapecontainer = document.getElementById('shapecontainer');
    document.body.appendChild(shapecontainer);
    var Shape = /** @class */ (function () {
        function Shape() {
            var _this = this;
            this.height = document.getElementById("height");
            this.width = document.getElementById("width");
            this.radius = document.getElementById("radius");
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
        function square(height) {
            var _this = _super.call(this) || this;
            _this.div.style.height = document.getElementById("height").value;
            shapecontainer.appendChild(_this.div);
            return _this;
        }
        return square;
    }(Shape));
    var rectangle = /** @class */ (function (_super) {
        __extends(rectangle, _super);
        function rectangle(height, width) {
            var _this = _super.call(this) || this;
            _this.div.style.height = document.getElementById("height").value;
            _this.div.style.width = document.getElementById("width").value;
            shapecontainer.appendChild(_this.div);
            return _this;
        }
        return rectangle;
    }(Shape));
    var circle = /** @class */ (function (_super) {
        __extends(circle, _super);
        function circle(radius) {
            var _this = _super.call(this) || this;
            _this.div.style.borderRadius = document.getElementById("radius").value;
            shapecontainer.appendChild(_this.div);
            return _this;
        }
        return circle;
    }(Shape));
    var triangle = /** @class */ (function (_super) {
        __extends(triangle, _super);
        function triangle(height) {
            var _this = _super.call(this) || this;
            _this.div.style.height = document.getElementById("height").value;
            shapecontainer.appendChild(_this.div);
            return _this;
        }
        return triangle;
    }(Shape));
});
