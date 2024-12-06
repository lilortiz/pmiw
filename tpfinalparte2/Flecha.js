class Flecha{
  constructor(posX,posY,velocidad){
    this.posX = posX;
    this.posY = posY;
    this.velocidad = velocidad;
    this.img = loadImage("data/flecha.png");
    this.colision = false;
  }
  
  dibujar(){
    fill(0,0,200);
    image(this.img, this.posX, this.posY, 20, 70);
    
    //Área de colisión de las flechas
    //rect(this.posX+5,this.posY+60,10,10);
  }
  
  movimiento(){
    //reinicia la posición
    if(this.posY > height+100){
      this.posY = -100;
      this.posX = random(0,640);
      this.colision = false;
    //actualiza la posición
    }else{
      this.posY = this.posY + this.velocidad;
    }
  }
  
  colisionCP(){
    this.colision = true;
  }
  
}
