function LeftRightButtons(x,y,areaw,maxval){
  this.x= x;
  this.y= y;
  this.areaw = areaw;
  this.areah = areaw/4;
  this.tag = "";
  this.scolor = color(190,220,255);
  this.maxval = maxval;
  this.count = 0;

  this.setTag = function(tag){
    this.tag = tag;
  }
  
  //Drawing the button in given location with current state
  this.draw = function(){

    fill(this.scolor);
    triangle(this.x-this.areaw/2,this.y,
    this.x-this.areaw/4,this.y-this.areah/2,
    this.x-this.areaw/4,this.y+this.areah/2);

    triangle(this.x+this.areaw/2,this.y,
    this.x+this.areaw/4,this.y-this.areah/2,
    this.x+this.areaw/4,this.y+this.areah/2);


    textAlign(CENTER,CENTER);
    textSize(this.areaw/10);
    fill(0);
    
    text(this.tag, this.x,this.y);
    
  }
  
  //this function is called when we click on the button 
  this.onClick = function(mposx,mposy){
    

    //first we check if the mouse position is on the button
    if((mposx > this.x-this.areaw/2 && mposx < this.x-this.areaw/4) &&
    (mposy > this.y-this.areah/2 && mposy < this.y+this.areah/2)){
      this.count--;
      if(this.count<0){
        this.count=this.maxval-1;
      }
      
      
    }
    else if((mposx < this.x+this.areaw/2 && mposx > this.x+this.areaw/4) &&
    (mposy > this.y-this.areah/2 && mposy < this.y+this.areah/2)){
      this.count++;
      if(this.count>=maxval){
        this.count=0;
      }
    }
    
 } 

  
  this.getCurrentValue = function(){
  
    return this.count+1;
  }
  
  this.setButtonColor = function(newcolor){
   this.scolor = newcolor;
 }

}