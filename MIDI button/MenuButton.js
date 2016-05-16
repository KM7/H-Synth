function MenuButton(x,y,boxl){
  this.x= x;
  this.y= y;
  this.boxl = boxl;
  this.scolor = color(190,220,255);

  this.setTag = function(tag){
    this.tag = tag;
  }
  
  //Drawing the button in given location with current state
  this.draw = function(){

    noStroke();
    fill(this.scolor);
    rect(this.x,this.y,this.boxl,this.boxl);
    stroke(2);
    line(this.x+this.boxl/5,this.y+this.boxl/4,this.x+4*this.boxl/5,this.y+this.boxl/4)
    line(this.x+this.boxl/5,this.y+2*this.boxl/4,this.x+4*this.boxl/5,this.y+2*this.boxl/4)
    line(this.x+this.boxl/5,this.y+3*this.boxl/4,this.x+4*this.boxl/5,this.y+3*this.boxl/4)

  }
  
  //this function is called when we click on the button 
  this.isClicked = function(mposx,mposy){

    return ((mposx > this.x && mposx < this.x+this.boxl) &&
    (mposy > this.y && mposy < this.y+this.boxl));
    
 } 

this.setButtonColor = function(newcolor){
   this.scolor = newcolor;
 }

}