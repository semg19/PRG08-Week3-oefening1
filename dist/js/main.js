var Wheel = (function () {
    function Wheel(parent, offset) {
        this.div = document.createElement("wheel");
        parent.appendChild(this.div);
        this.x = offset;
        this.y = 30;
        this.speed = 0;
    }
    Wheel.prototype.draw = function () {
        this.x += this.speed;
        this.div.style.transform = "translate(" + this.x + "px, " + this.y + "px)";
    };
    return Wheel;
}());
var Car = (function () {
    function Car(parent) {
        var _this = this;
        this.div = document.createElement("car");
        parent.appendChild(this.div);
        this.state = 1;
        this.speed = 2;
        this.jumpDirection = -2;
        this.x = 0;
        this.y = 220;
        this.wheel1 = new Wheel(this.div, 20);
        this.wheel2 = new Wheel(this.div, 100);
        window.addEventListener("keydown", function (e) { return _this.onKeyDown(e); });
    }
    Car.prototype.onKeyDown = function (e) {
        if (this.state == 1) {
            this.state = 2;
        }
    };
    Car.prototype.draw = function () {
        switch (this.state) {
            case 1:
                this.driving();
                break;
            case 2:
                this.jumping();
                break;
            case 3:
                this.crashing();
                break;
        }
        this.div.style.transform = "translate(" + this.x + "px," + this.y + "px)";
        this.wheel1.draw();
        this.wheel2.draw();
    };
    Car.prototype.driving = function () {
        this.x += this.speed;
    };
    Car.prototype.jumping = function () {
        this.x += this.speed;
        this.y += this.jumpDirection;
        if (this.y < 160)
            this.jumpDirection = 2;
        if (this.y > 220)
            this.state = 3;
    };
    Car.prototype.crashing = function () {
        this.y = 230;
        this.wheel1.y = this.wheel2.y = 20;
        this.wheel1.speed = -2;
        this.wheel2.speed = 2;
        document.getElementById("plateau").classList.add("animationpaused");
        document.getElementById("sky").classList.add("animationpaused");
    };
    return Car;
}());
var Game = (function () {
    function Game() {
        var _this = this;
        var container = document.getElementById("container");
        this.car = new Car(container);
        requestAnimationFrame(function () { return _this.gameLoop(); });
    }
    Game.prototype.gameLoop = function () {
        var _this = this;
        this.car.draw();
        requestAnimationFrame(function () { return _this.gameLoop(); });
    };
    return Game;
}());
window.addEventListener("load", function () {
    var g = new Game();
});
//# sourceMappingURL=main.js.map