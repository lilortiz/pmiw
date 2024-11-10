// Lilo Ortiz - Ivan Romero - TP Final parte 2
// 93502/9 y 119131/3 - Comisión 1
// Link al video: 

//variables
var estado = 0;
var colorF, colorT, colorBoton1, colorBoton2;

//arreglos
let imagenes = [];
let sonidos = [];
let flechas = [];

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
 /* for (let cont=0; cont<11; cont++){
    imagenes[cont] = loadImage("data/img"+cont+".jpeg");
  } */
  sonidoFondo = loadSound("data/audioFondo.mp3");
  
}

function setup() {
  createCanvas(640,480);
  
  colorF = color(0,0,0);
  colorT = color(255,255,255);
  colorBoton1 = color(169,102,53);
  colorBoton2 = color(97,59,30);
}


function draw() {
  background(0);

  if(estado === 2){
    cuadroTexto(200, 30, 200, 80, "Desarrollo e imágenes", 34, colorF, colorT, "CENTER");
    cuadroTexto(200, 110, 200, 40, "Lilo Ortiz - 93502/9", 20, colorF, colorT, "CENTER");
    cuadroTexto(200, 150, 200, 40, "Ivan Romero - 119131/3", 20, colorF, colorT, "CENTER");
    botonCrear(250, 400, 100, 40, "Atrás", 20, colorF, colorT, colorBoton1);
  }
}

function mousePressed(){
  
}
