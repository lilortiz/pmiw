// Lilo Ortiz - Ivan Romero - TP Final parte 1
// 93502/9 y 119131/3 - Comisión 1
//Link al video: 

//variables
var estado = 0;
var colorF, colorT;

//arreglos
let imagenesDeFondo = [];

//funciones
function boton(posX, posY, ancho, alto){
  if (mouseX > posX && mouseX < posX+ancho && mouseY > posY && mouseY < posY+alto) {
    return true;
  } else {
    return false;
  }
}

function cuadroTexto(posX, posY, tamX, tamY, txt, tamanoTxt, colorFondo, colorTxt){
  fill(colorFondo,50);
  rect(posX,posY,tamX,tamY);
  fill(colorTxt);
  textAlign(CENTER,CENTER);
  textSize(tamanoTxt);
  text(txt, posX+(tamX/2), posY+(tamY/2));
}

function preload(){
  for (let cont=0; cont<10; cont++){
    imagenesDeFondo[cont] = loadImage("data/img"+cont+".jpeg");
  }
}

function setup() {
  createCanvas(640,480);
  
  colorF = color(0,0,0);
  colorT = color(255,255,255);
}


function draw() {
  background(0);
  image(imagenesDeFondo[estado],0,0,640,480);

  if (estado === 0) {
    cuadroTexto(140, 30, 360, 80, "La noche boca arriba", 34, colorF, colorT);
  }
}

function mousePressed(){
  estado++;
}
