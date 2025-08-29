let = order = [];
let = clickedOrder = [];
let = score = 0;

//0 - verde
//1 - vermelho
//2 - azul
//3 - amarelo

const = blue = document.querySelector('.blue');
const = red = document.querySelector('.red');
const = green = document.querySelector('.green');
const = yellow = document.querySelector('.yellow');

//cria ordem aleatoria de cores
let shuffleOrder = () => {
    let = colorOrder = Math.floor(Math.random() * 4);
    order[order.length] = colorOrder;
    clickedOrder = [];

    for (let i in order) {
        let elementColor = createColorElement(order[i]);
        lightColor(elementColor, Number(i) + 1);
    }
}

//acende a proxima cor
let lightColor = (element, number) => {
   time = time *500;
    setTimeout(() => {
        element.classList.add('selected');
    }, tempo - 250);
    setTimeout(() => {
        element.classList.remove('selected');
    }, tempo);
}