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
  
  //revisa qué flecha se presionó y se mueve para un lado o el otro dependiendo de eso
  tecladoFlechas(keyCode){
    if(keyCode === LEFT_ARROW){
      this.movimientoI();
    }else if(keyCode === RIGHT_ARROW){
      this.movimientoD();
    }
  }
  
  //movimiento a la izquierda
  movimientoI(){
    this.posX = this.posX -20;
  }

  //movimiento a la derecha
  movimientoD(){
    this.posX = this.posX +20;  
  }
  
  //retorna falso si las vidas no se terminaron y verdadero si sí (quedó confuso el nombre)
  hayVidas(){
    if(this.vidas > 0){
      return false;
    }else if(this.vidas <= 0){
      return true;
    }
  }
  
  reiniciarVidas(){
    this.vidas = 3;
  }
  
}
