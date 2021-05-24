// se llama al canvas
const canvas = document.querySelector('#canvas');
// se declara el tipo de contexto a usar
const context = canvas.getContext('2d');

//valores random para que se inicialice en diferente lugar cuando se recarga la pagina 
let xSquarePosition = randomItemPosition(canvas.width, 0);
let ySquarePosition = randomItemPosition(canvas.height, 0);
let xCirclePosition = randomItemPosition((canvas.width - 75), 75);
let yCirclePosition = randomItemPosition((canvas.height - 75), 75);
let ySquareVelocity = randomItemPosition(3, -3);
let xSquareVelocity = randomItemPosition(3, -3);
let yCircleVelocity = randomItemPosition(3, -3);
let xCircleVelocity = randomItemPosition(3, -3);

//función para dibujar la animacion
function draw() {
    //limpieza del contexto
    context.clearRect(0, 0, canvas.width, canvas.height);
    //circle
    context.beginPath();
    context.fillStyle = 'red';
    context.arc(xCirclePosition, yCirclePosition, 75, 0, 2 * Math.PI);
    context.fill();
    //square
    context.fillStyle = 'blue';
    context.fillRect(xSquarePosition, ySquarePosition, 150, 150);

    //condicones para cuando las figuras chocan en las paredes
    if(xCirclePosition - 75 < 0 || xCirclePosition + 75 > canvas.width){
        
        xCircleVelocity = -xCircleVelocity;

    }

    if(yCirclePosition - 75 < 0 || yCirclePosition + 75  > canvas.height){
        
        yCircleVelocity = -yCircleVelocity;

    }

    if (xSquarePosition < 0 || xSquarePosition + 150 > canvas.width) {

        xSquareVelocity = -xSquareVelocity;

    }

    if(ySquarePosition < 0 || ySquarePosition + 150 > canvas.height){

        ySquareVelocity = -ySquareVelocity;

    }

    //avance de pixeles por cada frame
    xSquarePosition += xSquareVelocity;
    ySquarePosition += ySquareVelocity;
    xCirclePosition += xCircleVelocity;
    yCirclePosition += yCircleVelocity;

    //volver a ejecutar un frame
    window.requestAnimationFrame(draw);
}

//ejecutar un frame
window.requestAnimationFrame(draw);

//funcion para valores random
function randomItemPosition(max, min){
    return Math.random() * (max - min) + min;
}

