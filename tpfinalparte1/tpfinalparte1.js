// Lilo Ortiz - Ivan Romero - TP Final parte 1
// 93502/9 y 119131/3 - Comisión 1
// Link al video: https://youtu.be/s51Bz2wnxAQ

//variables
var estado = 0;
var colorF, colorT, colorBoton1, colorBoton2;

//arreglos
let imagenesDeFondo = [];

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

function cuadroTexto(posX, posY, tamX, tamY, txt, tamanoTxt, colorFondo, colorTxt, alineacion){
  push();
  fill(colorFondo,120);
  rect(posX,posY,tamX,tamY);
  fill(colorTxt);
  textAlign(alineacion,alineacion);
  textSize(tamanoTxt);
  if(alineacion === "CENTER"){
    text(txt, posX+(tamX/2), posY+(tamY/2));
  }else{
    text(txt, posX+10, posY+10, posX+tamX-10);
  }
  pop();
}

function preload(){
  for (let cont=0; cont<11; cont++){
    imagenesDeFondo[cont] = loadImage("data/img"+cont+".jpeg");
  }
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
  if(estado <= 10){
   image(imagenesDeFondo[estado],0,0,640,480); 
  }
  
  if(estado>=11 || estado<=1){
    textAlign(CENTER, CENTER);
  }else{
    textAlign(LEFT,LEFT);
  }

  if (estado === 0) {
    cuadroTexto(140, 30, 360, 80, "La noche boca arriba", 34, colorF, colorT,"CENTER");
    botonCrear(100, 400, 120, 40, "Comenzar", 20, colorT, colorBoton1, colorBoton2);
    botonCrear(420, 400, 120, 40, "Créditos", 20, colorT, colorBoton1, colorBoton2);
  }else if(estado === 1){
    textAlign(LEFT,LEFT);
    botonCrear(500,380,140,100,"Seguir",20,colorT,colorBoton1,colorBoton2);
    cuadroTexto(0,380,500,100,"Salís justo para llegar a horario. Te subís a la moto y empezás a recorrer la ciudad, disfruntando el paseo. Ves pasar los ministerios y las calles iluminadas por luces de colores que contrastan con la caída de la tarde.",18,colorF,colorT,"LEFT");
  }else if(estado === 2){
    botonCrear(500,380,140,50,"Intentar frenar",20,colorT,colorBoton1,colorBoton2);
    botonCrear(500,430,140,50,"Intentar doblar",20,colorT,colorBoton1,colorBoton2);
    cuadroTexto(0,380,500,100,"Te disponés a girar para la derecha cuando, de entre un puesto de revistas aparece una mujer. Se abalanza hacia la calle queriendo cruzar rápido. Pensás cómo actuar, preparándote para el impacto.",18,colorF,colorT,"LEFT");
  }else if(estado === 3){
    botonCrear(500,380,140,100,"Cerrar los ojos",20,colorT,colorBoton1,colorBoton2);
    cuadroTexto(0,380,500,100,"Tu reacción no es suficiente. La moto se tambalea y ves cómo el suelo se te aproxima antes de que puedas hacer nada. Lo siguiente de lo que sos consciente es de la gente reunéndose a tu alrededor.",18,colorF,colorT,"LEFT");
  }else if(estado === 4){
    botonCrear(500,380,140,50,"Intentar resistir",20,colorT,colorBoton1,colorBoton2);
    botonCrear(500,430,140,50,"Esperar",20,colorT,colorBoton1,colorBoton2);
    cuadroTexto(0,380,500,100,"Abrís los ojos y tus recuerdos se distorsionan. Sos de la tribu Moteca, fuiste raptado por un grupo de Aztecas que planean llevarte a su capital como sacrificio. Sentís que te invade la desesperación.",18,colorF,colorT,"LEFT");
  }else if(estado === 5){
    botonCrear(500,380,140,100,"Volver al inicio",20,colorT,colorBoton1,colorBoton2);
    cuadroTexto(0,380,500,100,"Cuando te parás para intentar huir ves cómo el líder de los Aztecas te ataca con una lanza. Despertás sobresaltado en el hospital. El accidente de moto casi no te dejó heridas. Te dan el alta un unas horas y volvés a casa.",18,colorF,colorT,"LEFT");
  }else if(estado === 6){
    botonCrear(500,380,140,100,"Dormir",20,colorT,colorBoton1,colorBoton2);
    cuadroTexto(0,380,500,100,"Pasadas unas horas, los aztecas deciden dormir. Te atan cerca de un árbol, dejándote espacio suficiente para acostarte y descanasar un poco. Estás agotado, así que cedés al peso de tus párpados.",18,colorF,colorT,"LEFT");
  }else if(estado === 7){
    botonCrear(500,380,140,100,"Volver a dormir",20,colorT,colorBoton1,colorBoton2);
    cuadroTexto(0,380,500,100,"Sin tener claro si estás soñando o no, abrís los ojos en la habitación del hospital. Ahora tenés un compañero en la cama de al lado, a quien le contás tus sueños como moteca hasta que el sueño vuelve a reclamarte.",18,colorF,colorT,"LEFT");
  }else if(estado === 8){
    botonCrear(500,380,140,50,"Escapar",20,colorT,colorBoton1,colorBoton2);
    botonCrear(500,430,140,50,"Esperar",20,colorT,colorBoton1,colorBoton2);
    cuadroTexto(0,380,500,100,"Cuando recuperás la consciencia, estás en la prisión de los aztecas. Debieron arrastrarte mientras dormías. Por la poca luz que te llega, sabés que está por amanecer. La hora de tu ejecución se acerca.",18,colorF,colorT,"LEFT");
  }else if(estado === 9){
    botonCrear(500,380,140,100,"Volver al inicio",20,colorT,colorBoton1,colorBoton2);
    cuadroTexto(0,380,500,100,"Lográs escabullirte por un hueco en los barrotes, eludiendo a los guardias aztecas. Huís lo más lejos que podés. Como las aldeas motecas están destruidas, te toca vagar en busca de un nuevo hogar. No volvés a soñar con el hospital.",18,colorF,colorT,"LEFT");
  }else if(estado === 10){
    botonCrear(500,380,140,100,"Volver al inicio",20,colorT,colorBoton1,colorBoton2);
    cuadroTexto(0,380,500,100,"Llega el momento de tu muerte. Mientras esperás boca arriba en la mesa de sacrificio, sentís llegar la verdad a vos. No sos el motociclista ni el moteca. Sos ambos y ninguno. Tu existencia va mucho más allá de este plano...",18,colorF,colorT,"LEFT");
  }else if(estado === 11){
    cuadroTexto(200, 30, 200, 80, "Desarrollo e imágenes", 34, colorF, colorT, "CENTER");
    cuadroTexto(200, 110, 200, 40, "Lilo Ortiz - 93502/9", 20, colorF, colorT, "CENTER");
    cuadroTexto(200, 150, 200, 40, "Ivan Romero - 119131/3", 20, colorF, colorT, "CENTER");
    cuadroTexto(0, 230, 640, 80, "Cuento 'La Noche Boca Arriba'", 34, colorF, colorT, "CENTER");
    cuadroTexto(200, 300, 200, 40, "Julio Cortázar", 20, colorF, colorT, "CENTER");
    botonCrear(250, 400, 100, 40, "Atrás", 20, colorF, colorT, colorBoton1);
  }
}

function mousePressed(){
  if (estado === 0 & botonB(100, 400, 100, 40)){
    estado++;
    if (!sonidoFondo.isPlaying()) {
      sonidoFondo.loop(true);
    }
  }else if(estado === 0 & botonB(420, 400, 120, 40)){
    estado=11;
  }else if(estado === 11 & botonB(250, 400, 100, 40)){
    estado=0;
  }else if(estado === 1 & botonB(500,380,140,100)){
    estado++;
  }else if(estado === 2 & botonB(500,380,140,100)){
    estado++;
  }else if(estado === 3 & botonB(500,380,140,100)){
    estado++;
  }else if(estado === 4 & botonB(500,380,140,50)){
    estado++;
  }else if(estado === 4 & botonB(500,430,140,50)){
    estado=6;
  }else if(estado === 5 & botonB(500,380,140,100)){
    estado=0;
  }else if(estado === 6 & botonB(500,380,140,100)){
    estado++;
  }else if(estado === 7 & botonB(500,380,140,100)){
    estado++;
  }else if(estado === 8 & botonB(500,380,140,50)){
    estado++;
  }else if(estado === 8 & botonB(500,430,140,50)){
    estado=10;
  }else if(estado === 9 & botonB(500,430,140,50)){
    estado=0;
  }else if(estado === 10 & botonB(500,430,140,50)){
    estado=0;
  }
  
}
