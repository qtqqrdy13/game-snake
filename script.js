const gameContainer = document.querySelector('.game_container');
const snake = document.querySelector('.snake');
const food = document.querySelector('.food');
const gridSize = 20;
let snakeX = 0;
let snakeY = 0;
let foodX = 0;
let foodY = 0;
let dx = gridSize;
let dy = 0;
let isGameRunning = false;
let gameInterval;
let foodEaten = false;

function updateFoodPosition() {
    foodX = Math.floor(Math.random() * (gameContainer.clientWidth / gridSize)) * gridSize;
    foodY = Math.floor(Math.random() * (gameContainer.clientHeight / gridSize)) * gridSize;
    food.style.left = foodX + 'px';
    food.style.top = foodY + 'px';
}

function endGame() {
    alert('Game Over');
    clearInterval(gameInterval);
    isGameRunning = false;
    location.reload();
}

function startGame() {
    isGameRunning = true;
    updateFoodPosition();
    gameInterval = setInterval(moveSnake, 200);
}

function moveSnake() {
    snakeX += dx;
    snakeY += dy;

    if (snakeX < 0 || snakeX >= gameContainer.clientWidth || snakeY < 0 || snakeY >= gameContainer.clientHeight) {
        endGame();
        return;
    }

    if (snakeX === foodX && snakeY === foodY) {
        foodEaten = true;
        updateFoodPosition();
    }

    const newSegment = document.createElement('div');
    newSegment.className = 'snake snake-segment';
    newSegment.style.left = snakeX + 'px';
    newSegment.style.top = snakeY + 'px';
    gameContainer.appendChild(newSegment);
    if (!foodEaten) {
        const segments = document.querySelectorAll('.snake-segment');
        if (segments.length > 1) {
            gameContainer.removeChild(segments[0]);
        }
    } else {
        foodEaten = false;
    }
}

document.addEventListener('keydown', (event) => {
    if (!isGameRunning) {
        startGame();
    }
    switch (event.key) {
        case 'ArrowRight':
            if (dx !== -gridSize) {
                dx = gridSize;
                dy = 0;
            }
            break;
        case 'ArrowLeft':
            if (dx !== gridSize) {
                dx = -gridSize;
                dy = 0;
            }
            break;
        case 'ArrowUp':
            if (dy !== gridSize) {
                dx = 0;
                dy = -gridSize;
            }
            break;
        case 'ArrowDown':
            if (dy !== -gridSize) {
                dx = 0;
                dy = gridSize;
            }
            break;
    }
});

updateFoodPosition();