class Arbusto{
  constructor(posX,posY){
    this.posX = posX;
    this.posY = posY;
    this.img = loadImage("data/arbusto.png");
  }
  
  movimiento(){
    if(this.posX > width+40){
      this.posX = random(-550,-150);
    }else{
      this.posX = this.posX + 3;
    }
  }
  
  dibujar(){
    image(this.img, this.posX, this.posY, 100, 100);
  }
}
