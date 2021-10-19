let order = [];
let clickedOrder = [];
let score = 0;

// red = 0 - green = 1 - yellow = 2 - blue = 3

let green = document.querySelector('.green');
let red = document.querySelector('.red');
let yellow = document.querySelector('.yellow');
let blue = document.querySelector('.blue');

// checa se os elementos clicados sao os mesmos da ordem gerada pelo game
let checkOrder = () => {
  for (let key in clickedOrder) {
    if (clickedOrder[key] !== order[key]) {
      gameOver();
      break;
    }
  }
  if (clickedOrder.length === order.length) {
    alert(`Pontuação: ${score} \n Acertou! Iniciando próximo level.`);
    nextLevel();
  }
}

// funcao que captura o click do usuario
let click = (color) => {
  console.log(clickedOrder.length);
  clickedOrder[clickedOrder.length] = color;
  createColorElement(color).classList.add('selected');

  setTimeout(() => {
    createColorElement(color).classList.remove('selected');
    checkOrder();
  }, 250)
}

// funcao para quando o usuario erra o click
let gameOver = () => {
  alert(`Pontuação: ${ score } \n Erroooou! \n Clique em reiniciar para jogar novamente!`);
  order = [];
  clickedOrder = [];

  playGame();
}

let lightColor = (element, number) => {
  number = number * 500;
  setTimeout(() => {
    element.classList.add('selected')
  }, number - 250);
  setTimeout(() => {
    element.classList.remove('selected');
  }, 600);
}

// funcao que retorna a cor
let createColorElement = (color) => {
  switch (color) {
    case 0:
      return green;
    case 1:
      return red;
    case 2:
      return yellow;
    case 3:
      return blue;
    default:
      return null;
  }
}

// randomiza as cores do jogo
let suffleOrder = () => {
  let colorOrder = Math.floor(Math.random() * 4);
  order[order.length] = colorOrder;
  clickedOrder = [];

  for (let i in order) {
    let elementColor = createColorElement(order[i]);
    lightColor(elementColor, Number(i) + 1)
  }
}

// funcao para proximo level
let nextLevel = () => {
  score =+ 1;
  suffleOrder();
}

// funcao para iniciar o jogo
let playGame = () => {
  alert('Bem vindo(a) ao Genêsis! Iniciando uma partida!');
  score = 0;

  nextLevel();
}

// funcoes de eventos do click no jogo
green.addEventListener('click', () => click(0))
red.addEventListener('click', () => click(1))
yellow.addEventListener('click', () => click(2))
blue.addEventListener('click', () => click(3))

// iniciando o jogo
playGame();
