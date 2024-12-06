class Arbusto{
  constructor(posX,posY){
    //atributos
    this.posX = posX;
    this.posY = posY;
    //imagen
    this.img = loadImage("data/arbusto.png");
  }
  
  movimiento(){
    if(this.posX > width+40){
      //reinicia la posición
      this.posX = random(-550,-150);
    }else{
      //actualiza la posición
      this.posX = this.posX + 3;
    }
  }
  
  dibujar(){
    image(this.img, this.posX, this.posY, 100, 100);
  }
}
