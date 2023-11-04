const gameContainer = document.querySelector('.game_container');
const snake = document.querySelector('.snake');
const food = document.querySelector('.food');
let snakeX = 0;
let snakeY = 0;
let foodX = 0;
let foodY = 0;
let dx = 20;
let dy = 0;
let snakeSegments = [];
function updateFoodPosition(){
    foodX = Math.floor(Math.random() * 20) * 20;
    foodY = Math.floor(Math.random() * 20) * 20;
    food.style.left = foodX + 'px';
    food.style.top = foodY + 'px';
}
function moveSnake(){
    snakeX += dx;
    snakeY += dy;
    snakeSegments.push({x:snakeX, y:snakeY});
    if(snakeX < 0 || snakeX >= 700 || snakeY < 0 || snakeY >= 700){
        alert('Game Over');
location.reload()
return;
    }
    for(let i = 0; i < snakeSegments.length; i ++){
        if(snakeX === snakeSegments[i].x && snakeY === snakeSegments[i].y){
            alert('Game Over');
            location.reload()
            return;
        }
    }
   
/*if(snakeSegments.length > 1){
        const removedSegment = snakeSegments.shift()
    }*/
    snake.style.left = snakeX + 'px';
    snake.style.top = snakeY + 'px';
    if(snakeX === foodX && snakeY === foodY){
        updateFoodPosition()
    }
    else{
snakeSegments.shift();
    }
}
document.addEventListener('keydown',(event) =>{
    switch(event.key){
        case 'ArrowRight':
            if(dx !== -20){
                dx = 20;
                dy = 0;
            }
            break;
            case 'ArrowLeft':
            if(dx !== 20){
                dx = -20;
                dy = 0;
            }
            break;
            case 'ArrowUp':
                if(dy !== 20){
                    dx = 0;
                    dy = -20;
                }
                break;
                case 'ArrowDown':
                    if(dy !== -20){
                        dx = 0;
                        dy = 20;
                    }
                    break;
                }
})
updateFoodPosition()
setInterval(moveSnake, 200);
