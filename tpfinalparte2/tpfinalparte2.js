// Lilo Ortiz - Ivan Romero - TP Final parte 2
// 93502/9 y 119131/3 - Comisión 1
// Link al video: 

//variables
let gameManager;

function preload(){
  //cargar sonido
  sonidoFondo = loadSound("data/audioFondo.mp3");
  //crear una instancia de la clase GameMaanger
  gameManager = new GameManager();
  
}

function setup() {
  createCanvas(640,480);
}


function draw() {
  background(0);
  
  //ejecutar método principal del gm
  gameManager.dibujar();
  
}

function mousePressed(mouseBu){
  //avisa al gm que se presionó el mouse para q avise al botón q corresponda
  gameManager.presMouse();
  
  //ejecuta el sonido de fondo en loop si es que no se está ejecutando
  if (!sonidoFondo.isPlaying()) {
        sonidoFondo.loop(true);
  }
}

function keyPressed(){
  //ejecuta el método del gm que pasa el valor de la tecla presionada al jugador
  gameManager.tecladoFlechas(keyCode)
}
