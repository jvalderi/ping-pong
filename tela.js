let xBotaoInicial = 250 
let yBotaoInicial = 180
let comBotaoInicial = 100
let altBotaoInicial = 40
let comecar;

function tela_inicial(){
  background(0)
  textAlign(CENTER)
  fill(255)
  rect(xBotaoInicial, yBotaoInicial, comBotaoInicial ,altBotaoInicial)
  
  fill(0)
  textSize(15)
  text("começar", xBotaoInicial + 50 , yBotaoInicial + 20)
  
  
  }


