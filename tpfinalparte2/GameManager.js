class GameManager{
  constructor(){
    this.jugador = new Jugador(320,360);
    this.flechas = [];
    this.arbustos =  [];
    this.cielo = loadImage("data/cielo.jpeg");
    
    for(let cont=0; cont<6; cont++){
      this.flechas[cont] = new Flecha(random(0,640), 30, (cont+2)*1.3);
    }
    for(let cont=0; cont<4; cont++){
      this.arbustos[cont] = new Arbusto(random(-550,-150),400);
    }
    
  }
  
  dibujar(){
    image(this.cielo,0,0,640,400);
    noStroke();
    fill(131,75,32);
    rect(0,400,640,80);
    
    this.jugador.dibujar();
    for(let cont=0; cont<6; cont++){
      this.flechas[cont].movimiento();
      this.flechas[cont].dibujar();
    }
    for(let cont=0; cont<4; cont++){
      this.arbustos[cont].movimiento();
      this.arbustos[cont].dibujar();
    }
  }
  
  tecladoFlechas(keyCode){
    this.jugador.tecladoFlechas(keyCode)
  }
  
  iniciar(){
  
  }
  
  crearFlechas(){
  
  }
  
  crearPersonajes(){
  
  }
  
  comprobarCantFlechas(){
  
  }
  
  ganar(){
  
  }
  
  perder(){
  
  }
  
}
