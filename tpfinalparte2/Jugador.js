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
    if (this.posX - 20 >= 0) {
      this.posX = this.posX - 20;
    } else {
      this.posX = 0; 
    }
  }

  //movimiento a la derecha
  movimientoD(){
    if (this.posX + 70 + 20 <= 640) { 
      this.posX = this.posX + 20;
    } else {
      this.posX = 640 - 70;  // Evita que salga por la derecha
    }
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
