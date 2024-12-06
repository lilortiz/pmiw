class GameManager{
  constructor(){
    //muchos atributos
    
    //objetos necesarios para el juego
    this.jugador = new Jugador(320,360);
    this.botonReiniciar = new Boton(270,250,100,40,"Menú");
    this.botonVolver = new Boton(270,250,100,40,"Volver");
    this.botonComenzar = new Boton(270,250,100,40,"Comenzar");
    this.botonCreditos = new Boton(270,300,100,40,"Créditos");
    this.flechas = [];
    this.arbustos =  [];
    
    //carga la imagen del fondo
    this.cielo = loadImage("data/cielo.jpeg");
    
    //atributos del gm
    this.contador = 0;
    this.iContador = millis();
    this.fContador = 20000;
    this.pContador = 0;
    
    //crea las instancias flecha dentro de un arreglo
    for(let cont=0; cont<6; cont++){
      this.flechas[cont] = new Flecha(random(0,640), 30, (cont+2)*1.3);
    }
    //crea las instancias arbusto dentro de un arreglo
    for(let cont=0; cont<4; cont++){
      this.arbustos[cont] = new Arbusto(random(-550,-150),400);
    }
    
  }
  
  dibujar(){
    
    //pantallas
    if (this.pContador === 0){
      this.pantalla0();
    }else if(this.pContador === 1){
      this.juego();
    }else if(this.pContador === 2){
      this.pantallaCreditos();
    }else if(this.pContador === 3){
      this.pantallaGanar();
    }else if(this.pContador === 4){
      this.pantallaPerder();
    }
    
  }
  
  juego(){
    
    //fondo
    image(this.cielo,0,0,640,400);
    noStroke();
    fill(131,75,32);
    rect(0,400,640,80);
    
    //se acrualiza el contador de tiempo para ganar
    this.contador = millis() - this.iContador;
    
    //se dibujan y se actualiza la posición de los objetos
    this.jugador.dibujar();
    for(let cont=0; cont<6; cont++){
      this.flechas[cont].movimiento();
      this.flechas[cont].dibujar();
    }
    for(let cont=0; cont<4; cont++){
      this.arbustos[cont].movimiento();
      this.arbustos[cont].dibujar();
    }
    
    //contadores de tiempo y de vidas visibles
    fill(0);
    text("Vidas:"+this.jugador.vidas,40,10);
    text("Tiempo: " + (int((this.fContador - this.contador) / 1000)), 400,10);
    
    //revisor de colisiones (?
    this.colisionFJ();
    
    //si se terminan las vidas del jugador actualiza el contador de estados a 4
    if(this.jugador.hayVidas()){
      this.jugador.reiniciarVidas();
      this.pContador = 4;
    }
    
    //si se termina el tiempo actualiza el contador de estados 3
    if(this.contador >= this.fContador){
      this.pContador = 3;
    }
  
  }
  
  //método que le pasa el código de la tecla que se presionó al jugador
  tecladoFlechas(keyCode){
    this.jugador.tecladoFlechas(keyCode)
  }
  
  //revisa la distancia entre la pos del j y la pos d cada una de las flechas para ver si colisionaron + resta vida si es necesario
  colisionFJ(){
    for(let cont=0; cont<6; cont++){
      let distancia = dist(this.jugador.posX+35,this.jugador.posY+45,this.flechas[cont].posX+10,this.flechas[cont].posY+65);
      if(distancia < 30){
        if(this.flechas[cont].colision === false){
          this.flechas[cont].colisionCP();
          this.jugador.vidas = this.jugador.vidas - 1;
        }
      }
    }
  }
  
  //reinicia todo en realidad, los contadores y las vidas del jugador
  reiniciarVidas(){
    this.jugador.reiniciarVidas();
    this.contador = 0;
    this.iContador = millis();
    this.pContador = 0;
  }
  
  //evalúa si se presionó alguno de los botones y hace el cambio de estado que corresponda
  presMouse(){
  if(this.botonComenzar.hOver() & this.pContador === 0 ){
    this.pContador = 1;  
  }else if(this.botonCreditos.hOver() & this.pContador ===0 ){
    this.pContador = 2;
  }else if(this.botonVolver.hOver() & this.pContador ===2 ){
    this.pContador = 0;
  }else if(this.botonReiniciar.hOver() & this.pContador ===3 ){
    this.pContador = 0;
    this.reiniciarVidas();
  }else if(this.botonReiniciar.hOver() & this.pContador ===4 ){
    this.pContador = 0;
    this.reiniciarVidas();
    }
  }
  
  //pantalla de inicio
  pantalla0(){
    fill(255);
    textAlign(CENTER,CENTER);
    textSize(20);
    text("Usá las flechas del teclado para evitar los disparos.", 320,100);
    text("Cada flecha que te toque te sacará una vida.", 320,130);
    text("Cuando te quedes sin vidas, perdés.", 320,160);
    
    this.botonComenzar.dibujar();
    this.botonCreditos.dibujar();
  }
  
  //pantalla de créditos
  pantallaCreditos(){
    fill(255);
    textAlign(CENTER,CENTER);
    textSize(20);
    text("Créditos", 320,100);
    text("Lilo Ortiz - 93502/9", 320,130);
    text("Ivan Romero - 119131/3", 320,160);
    
    this.botonVolver.dibujar();
  }
  
  //pantalla de ganar
  pantallaGanar(){
    background(0,255,0);
    text("GANASTE",320,240);
    
    this.botonReiniciar.dibujar();
  }
  
  //pantalla de perder
  pantallaPerder(){
    background(255,0,0);
    text("PERDISTE",320,240);
    
    this.botonReiniciar.dibujar();
  }
  
}
