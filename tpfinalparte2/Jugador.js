class Jugador{
  constructor(posX,posY){
    this.posX = posX;
    this.posY = posY;
    this.img = loadImage("data/personaje.png");
    this.vidas = 3;
    this.velocidad = 5;
  }
  
  dibujar(){
    image(this.img, this.posX, this.posY, 70, 90);
  }
  
  tecladoFlechas(keyCode){
    if(keyCode === LEFT_ARROW){
      this.movimientoI();
    }else if(keyCode === RIGHT_ARROW){
      this.movimientoD();
    }
  }
  
  movimientoI(){
    this.posX = this.posX -20;
  }

  movimientoD(){
    this.posX = this.posX +20;  
  }
  
  hayVidas(){
    if(this.vidas > 0){
      return false;
    }else if(this.vidas <= 0){
      return true;
    }
  }
  
}
