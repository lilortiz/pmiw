// Lilo Ortiz - Ivan Romero - TP Final parte 1
// 93502/9 y 119131/3 - Comisión 1
//Link al video: 

//variables
var estado = 0;

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

function preload(){
  for (let cont=0; cont<9; cont++){
    imagenesDeFondo[cont] = loadImage("data/img"+cont+".jpeg");
  }
}

function setup() {
  createCanvas(640,480);
  
}


function draw() {
  background(0);

}
