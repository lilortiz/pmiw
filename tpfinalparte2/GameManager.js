class GameManager{
  constructor(){
    this.jugador = new Jugador(320,360);
    this.flechas = [];
    this.arbustos =  [];
    this.cielo = loadImage("data/cielo.jpeg");
    this.estado = 1;
    
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
    
    fill(0);
    text("Colisiones:"+this.jugador.vidas,40,10);
    
    this.colisionFJ();
    
    if(this.jugador.hayVidas()){
      this.jugador.reiniciarVidas();
      this.perder();
    }
    
    
  }
  
  tecladoFlechas(keyCode){
    this.jugador.tecladoFlechas(keyCode)
  }
  
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
  
  
  ganar(){
    this.estado = 3;
  }
  
  perder(){
    this.estado = 4;
  }
  
  reiniciarVidas(){
    this.estado = 1;
    this.jugador.reiniciarVidas();
  }
  
}
