// crontrole de tela
let tela = 1

// constante da bolinha 
let yBolinha = 200
let xBolinha = 300
let raio = 20
let diametro = raio * 2
   // movimento 
let xAceleracao = 7
let yAceleracao = 7

// constante raquete 
let alturaRaquete = 100
let comprimentoRaquete = 9
let colidiu = false;
  // minha raquete 
let xMinhaRaquete = 10
let yMinhaRaquete = 150

 // raquete oponente 
let xOponenteRaquete = 580
let yOponenteRaquete = 150
let yAceleracaoOponente;
let erroOponete = 0

//placar do jogo
let meusPontos = 0;
let oponentePontos = 0;


function setup() {
  createCanvas(600, 400);
}

function draw() {
  if (tela == 1){
    tela_inicial();
    textAlign(CENTER)
    fill(200)
    text("mover com as setinha ou W S", 300, 250)
     bolinhaNaoFicaPresa();
   
  }
  else{
  
  bolinhaNaoFicaPresa();
  background(0);
  mostrarBolinha();
  moverBolinha();
  colisaoBolinha();
  raquete(xMinhaRaquete, yMinhaRaquete, color(250, 0, 0));
  raquete(xOponenteRaquete, yOponenteRaquete, color(0, 0, 250));
  colisaoRaquete(xMinhaRaquete, yMinhaRaquete );
  colisaoRaquete(xOponenteRaquete, yOponenteRaquete )
  movimentoMinharaquete();
  movimentoRaqueteOponente();
  placar();  
  }
}

function mostrarBolinha(){
 fill(color(250, 0, 250))
  circle(xBolinha, yBolinha, raio)
}

function moverBolinha(){
  xBolinha += xAceleracao
  yBolinha += yAceleracao  
}

function colisaoBolinha(){
 if(xBolinha + raio > width || xBolinha - raio < 0){
   xAceleracao *= -1;
 }
 if(yBolinha + raio > height || yBolinha - raio < 0){
   yAceleracao *= -1
 }
}

function colisaoRaquete(x, y){
 colidiu = collideRectCircle(x, y, comprimentoRaquete, alturaRaquete, xBolinha, yBolinha, raio);
  if(colidiu){
     xAceleracao *= -1;
  }
}

function movimentoMinharaquete(){
  if(keyIsDown(UP_ARROW) || keyIsDown(87)){
    yMinhaRaquete -= 10;
  }
  if(keyIsDown(DOWN_ARROW) || keyIsDown(83)){
    yMinhaRaquete += 10;
    }
}

function raquete(x, y, color){
 fill(color)
  rect(x, y, comprimentoRaquete, alturaRaquete)
}

function movimentoRaqueteOponente(){
  velocidadeYoponente = yBolinha - yOponenteRaquete - comprimentoRaquete / 2 - 30
  yOponenteRaquete += velocidadeYoponente + erroOponete
  calcularErroOponente()
}

function placar(){
 fill(color(249, 217, 35));
  rect(150, 10, 50, 20);
  rect(400, 10, 50, 20);
 
  fill(0)
  textAlign(CENTER)
  textSize(17)
  text(meusPontos, 175, 25)
  text(oponentePontos, 425, 25)
  
  if (xBolinha > 580){
      meusPontos += 1;
      }
  if(xBolinha < 20){
    oponentePontos += 1
  }
}


function bolinhaNaoFicaPresa(){
    if (xBolinha - raio < 0){
    xBolinha = 23
    }
}

function calcularErroOponente(){
   if (oponentePontos >= meusPontos) {
    erroOponete += 10
    if (erroOponete >= 30){
    erroOponete = 40
    }
  } else {
    erroOponete -= 1
    if (erroOponete <= 35){
    erroOponete = 35
    }
  }
}






