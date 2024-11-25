// Lilo Ortiz - Ivan Romero - TP Final parte 2
// 93502/9 y 119131/3 - Comisión 1
// Link al video: https://youtu.be/jNEpW_a3BI8

//variables
let gameManager;
let contador;
let colorF, colorT, colorB1, colorB2;

//arreglos


//funciones
function botonB(posX, posY, ancho, alto){
  if (mouseX > posX && mouseX < posX+ancho && mouseY > posY && mouseY < posY+alto) {
    return true;
  } else {
    return false;
  }
}

function botonCrear(posX,posY,tamX,tamY,txt,tamanoTxt,colorTxt,colorN,colorH){
  push();
  if(botonB(posX,posY,tamX,tamY)){
    fill(colorH);
  }else{
    fill(colorN);
  }
  rect(posX,posY,tamX,tamY);
  fill(colorTxt);
  textAlign(CENTER,CENTER);
  textSize(tamanoTxt);
  text(txt, posX+(tamX/2), posY+(tamY/2));
  pop();

}

function preload(){
  sonidoFondo = loadSound("data/audioFondo.mp3");
  gameManager = new GameManager();
  
}

function setup() {
  createCanvas(640,480);
  
  //iniciar variables
  contador = 0;
  colorF = color(0,200,0);
  colorT = color(255,255,255);
  colorB1 = color(100,100,100);
  colorB2 = color(200,200,200);
}


function draw() {
  background(0);
  
  gameManager.dibujar();
  
  /*if(gameManager.estado === 3){
      contador = 3;
    }else if(gameManager.estado === 4){
      contador = 4;
    }
    
  } else if(contador === 2){
    fill(255);
    textAlign(CENTER,CENTER);
    textSize(20);
    text("Créditos", 320,100);
    text("Lilo Ortiz - 93502/9", 320,130);
    text("Ivan Romero - 119131/3", 320,160);
    
    botonCrear(270,250,100,40,"Volver",18,colorT,colorB1,colorB2);
  } else if(contador === 3){
    background(255,0,0);
    text("GANASTE",320,240);
    botonCrear(270,250,100,40,"Menú",18,colorT,colorB1,colorB2);
    
  } else if(contador === 4){
    background(255,0,0);
    text("PERDISTE",320,240);
    botonCrear(270,250,100,40,"Menú",18,colorT,colorB1,colorB2);
  }*/
}

function mousePressed(mouseBu){
  gameManager.presMouse();
  if (!sonidoFondo.isPlaying()) {
        sonidoFondo.loop(true);
  }
  /*if(botonB(270,250,100,40) & contador === 0 ){
    contador = 1;
    if (!sonidoFondo.isPlaying()) {
      sonidoFondo.loop(true);
    }
  }else if(botonB(270,300,100,40) & contador ===0 ){
    contador = 2;
  }else if(botonB(270,250,100,40) & contador ===2 ){
    contador = 0;
  }else if(botonB(270,250,100,40) & contador ===3 ){
    contador = 0;
    gameManager.reiniciarVidas();
  }else if(botonB(270,250,100,40) & contador ===4 ){
    contador = 0;
    gameManager.reiniciarVidas();
  }*/
}

function keyPressed(){
  gameManager.tecladoFlechas(keyCode)
}
