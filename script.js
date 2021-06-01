function animation(){
    // se llama al canvas
    const canvas = document.querySelector('#canvas');
    // se declara el tipo de contexto a usar
    const context = canvas.getContext('2d');
    //radio del circulo
    const r = 75;
    //lado del cadrado
    const l = 150;
    //valores random para que se inicialice en diferente lugar cuando se recarga la pagina 
    let xSquarePosition = randomItemPosition(canvas.width, 0);
    let ySquarePosition = randomItemPosition(canvas.height, 0);
    let xCirclePosition = randomItemPosition((canvas.width - r), r);
    let yCirclePosition = randomItemPosition((canvas.height - r), r);
    let ySquareVelocity = randomItemPosition(3, -3);
    let xSquareVelocity = randomItemPosition(3, -3);
    let yCircleVelocity = randomItemPosition(3, -3);
    let xCircleVelocity = randomItemPosition(3, -3);
    //limpieza del contexto
    function clean(){
        context.clearRect(0, 0, canvas.width, canvas.height);
    }
    //función para dibujar la animacion
    class drawFigures{
        constructor(color) {
            context.beginPath();
            context.fillStyle = color;
        }
    }
    class circle extends drawFigures{
        constructor(color, r){
            super(color);
            context.fillStyle = color;
            context.arc(xCirclePosition, yCirclePosition, r, 0, 2 * Math.PI);
            context.fill();
        }
    }
    class square extends drawFigures{
        constructor(color, l){
            super(color);
            context.fillStyle = color;
            context.fillRect(xSquarePosition, ySquarePosition, l, l);
        }
    }
    //condicones para cuando las figuras chocan en las paredes
    function action(){
        clean();
        draw();

        if(xCirclePosition - r < 0 || xCirclePosition + r > canvas.width){
            xCircleVelocity = -xCircleVelocity;
        }
        if(yCirclePosition - r < 0 || yCirclePosition + r  > canvas.height){
            yCircleVelocity = -yCircleVelocity;
        }
        if (xSquarePosition < 0 || xSquarePosition + l > canvas.width) {
            xSquareVelocity = -xSquareVelocity;
        }
        if(ySquarePosition < 0 || ySquarePosition + l > canvas.height){
            ySquareVelocity = -ySquareVelocity;
        }

        iteration();
    }
    //avance de pixeles por cada frame y volver a ejecutar un frame
    function iteration(){
        xSquarePosition += xSquareVelocity;
        ySquarePosition += ySquareVelocity;
        xCirclePosition += xCircleVelocity;
        yCirclePosition += yCircleVelocity;

        window.requestAnimationFrame(action);
    }

    //ejecutar un frame
    window.requestAnimationFrame(action);

    //funcion para valores random
    function randomItemPosition(max, min){
        return Math.random() * (max - min) + min;
    }
}

animation();
/*function animation(){
    // se llama al canvas
    const canvas = document.querySelector('#canvas');
    // se declara el tipo de contexto a usar
    const context = canvas.getContext('2d');
    //radio del circulo
    const r = 75;
    //lado del cadrado
    const l = 150;
    //valores random para que se inicialice en diferente lugar cuando se recarga la pagina 
    let xSquarePosition = randomItemPosition(canvas.width, 0);
    let ySquarePosition = randomItemPosition(canvas.height, 0);
    let xCirclePosition = randomItemPosition((canvas.width - r), r);
    let yCirclePosition = randomItemPosition((canvas.height - r), r);
    let ySquareVelocity = randomItemPosition(3, -3);
    let xSquareVelocity = randomItemPosition(3, -3);
    let yCircleVelocity = randomItemPosition(3, -3);
    let xCircleVelocity = randomItemPosition(3, -3);
    //limpieza del contexto
    function clean(){
        context.clearRect(0, 0, canvas.width, canvas.height);
    }
    //función para dibujar la animacion
    function draw() {
        //circle
        context.beginPath();
        context.fillStyle = 'red';
        context.arc(xCirclePosition, yCirclePosition, r, 0, 2 * Math.PI);
        context.fill();
        //square
        context.fillStyle = 'blue';
        context.fillRect(xSquarePosition, ySquarePosition, l, l);
    }
    //condicones para cuando las figuras chocan en las paredes
    function action(){
        clean();
        draw();

        if(xCirclePosition - r < 0 || xCirclePosition + r > canvas.width){
            xCircleVelocity = -xCircleVelocity;
        }
        if(yCirclePosition - r < 0 || yCirclePosition + r  > canvas.height){
            yCircleVelocity = -yCircleVelocity;
        }
        if (xSquarePosition < 0 || xSquarePosition + l > canvas.width) {
            xSquareVelocity = -xSquareVelocity;
        }
        if(ySquarePosition < 0 || ySquarePosition + l > canvas.height){
            ySquareVelocity = -ySquareVelocity;
        }

        iteration();
    }
    //avance de pixeles por cada frame y volver a ejecutar un frame
    function iteration(){
        xSquarePosition += xSquareVelocity;
        ySquarePosition += ySquareVelocity;
        xCirclePosition += xCircleVelocity;
        yCirclePosition += yCircleVelocity;

        window.requestAnimationFrame(action);
    }

    //ejecutar un frame
    window.requestAnimationFrame(action);

    //funcion para valores random
    function randomItemPosition(max, min){
        return Math.random() * (max - min) + min;
    }
}

animation();*/