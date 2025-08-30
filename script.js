let order = [];
let clickedOrder = [];
let score = 0;

//0 - verde
//1 - vermelho
//2 - azul
//3 - amarelo

const green = document.querySelector('.green');
const red = document.querySelector('.red');
const blue = document.querySelector('.blue');
const yellow = document.querySelector('.yellow');

//cria ordem aleatoria de cores
let shuffleOrder = () => {
    let colorOrder = Math.floor(Math.random() * 4);
    order[order.length] = colorOrder;
    clickedOrder = [];

    for (let i in order) {
        let elementColor = createColorElement(order[i]);
        lightColor(elementColor, Number(i) + 1);
    }
}

//acende a proxima cor
let lightColor = (element, number) => {
   number = number *500;
    setTimeout(() => {
        element.classList.add('selected');
    }, number - 350);
    setTimeout(() => {
        element.classList.remove('selected');
    }, number);
}

//checa se os botoes clicados são os mesmos da ordem do jogo
let checkOrder = () => {
    for (let i = 0; i < clickedOrder.length; i++){ 
        if(clickedOrder[i] != order[i]){
            gameOver();
            return;
        }
    }
    if(clickedOrder.length == order.length){
        //alert(`Pontuação: ${score}\nVocê acertou!\nIniciando próximo nível.`);
        nextLevel();
    }
}

//funcao p/ o clique do usuário
let click = (color) => {
    clickedOrder[clickedOrder.length] = color; 
    createColorElement(color).classList.add('selected');

    setTimeout(() => {
        createColorElement(color).classList.remove('selected');
        checkOrder();
    }, 700);
    
}

//função que retorna a cor
let createColorElement = (color) => {
    if(color == 0){
        return green;
    } else if (color == 1){
        return red;
    } else if (color == 2){
        return blue;
    } else {
        return yellow;
    }
}

//funcao de proximo nivel 
let nextLevel = () => {
    score++;
    shuffleOrder();
}

//funcao p/ game over
let gameOver = () => { 
    alert(`Pontuação: ${score}!\nVocê perdeu o jogo.\nClique em OK para iniciar um novo jogo.`);
    order = [];
    clickedOrder = [];

    playGame();
}

let playGame = () => {
    alert('Bem-vindo ao Genius, iniciando novo jogo!');
    score = 0;   

    nextLevel();
}
    green.addEventListener('click',() => click(0));
    red.addEventListener('click',() => click(1));
    blue.addEventListener('click',() => click(2));
    yellow.addEventListener('click',() => click(3));

playGame();