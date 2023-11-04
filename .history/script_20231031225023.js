const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");
const ground = new Image();
ground.src = "img/ground.png";
food.src = "img/food-for-snake.png";
let box = 32;

let score = 0;
function snakeGame(){
    ctx.drawImage(ground, 0, 0 );
}

let game = setInterval(snakeGame, 100);