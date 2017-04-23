/// <reference path="car.ts"/>

class Game {

    private car : Car;

    constructor() {
        let container = document.getElementById("container");
        this.car = new Car(container);

        requestAnimationFrame(() => this.gameLoop());
    }

    private gameLoop(){
        this.car.draw();
        requestAnimationFrame(() => this.gameLoop());
    }
} 


// load
window.addEventListener("load", function() {
    let g:Game = new Game();
});