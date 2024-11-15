class Flecha{
  constructor(posX,posY,velocidad){
    this.posX = posX;
    this.posY = posY;
    this.velocidad = velocidad;
    this.img = loadImage("data/flecha.png");
  }
  
  dibujar(){
    fill(0,0,200);
    image(this.img, this.posX, this.posY, 20, 70);
  }
  
  movimiento(){
    if(this.posY > height+100){
      this.posY = -100;
      this.posX = random(0,640);
    }else{
      this.posY = this.posY + this.velocidad;
    }
  
  }
}
