function Slider(x,y,barw,barh,minr,maxr){
  this.x= x;
  this.y= y;
  this.scolor= color(190,220,255);
  this.barw = barw;
  this.barh = barh;
  this.minr = minr;
  this.maxr = maxr;
  this.count = 1;
  this.tag = "";
  this.currentval = (maxr+minr)/2;
  this.currentxpos = map(this.currentval,this.minr,this.maxr,this.x,this.x+this.barw);
  this.drag=false;
  
  this.setTag = function(tag){
    this.tag = tag;
  }
  
  this.setCurrentVal = function(currval){
    this.currentval = currval;
    this.currentxpos = map(this.currentval,this.minr,this.maxr,this.x,this.x+this.barw);
  }
  
  this.getCurrentVal = function(){
    return this.currentval;
  }
  

  //Drawing the button in given location with current state
  this.draw = function(){
    
    //Drawing the base circle
    ellipseMode(CENTER);
    noStroke();
    fill(this.scolor);
    rect(this.x,this.y,this.barw,this.barh);

    stroke(1);
    rect(this.currentxpos-this.barw/40,this.y-this.barh/10,this.barw/20,6*this.barh/5);
    line(this.currentxpos,this.y,this.currentxpos,this.y+this.barh);
    noStroke();
    
    textAlign(RIGHT,CENTER);
    textSize(barw/40);
    fill(0);
    
    text(this.tag+"  ", this.x,this.y+this.barh/2);
  }
  
  //this function is called when we click on the button 
  this.onClick = function(mposx,mposy){
    
    //first we check if the mouse position is on the button
    if((mposx > this.x && mposx < this.x + this.barw) &&
    (mposy > this.y && mposy < this.y + this.barh)){
      
      this.drag = true;
      this.currentxpos= mouseX;
      this.currentval = map(mouseX,this.x,this.x+this.barw,minr,maxr);
      //println(num);

    }
    
 } 
  this.onDrag = function(mposx,mposy){
    if(this.drag){
      if((mposx > this.x && mposx < this.x + this.barw) &&
        (mposy > this.y && mposy < this.y + this.barh)){
        
        this.currentxpos= mouseX;
        this.currentval = map(mouseX,this.x,this.x+this.barw,minr,maxr);
      }
    }
  }
  
  this.onRelease= function(){
    this.drag = false;
  }
  

 this.setSliderColor = function(newcolor){
   this.scolor = newcolor;
 }
 
}
