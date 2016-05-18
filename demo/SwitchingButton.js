function SwitchingButton(x,y,radius){
  this.x= x;
  this.y= y;
  this.radius = radius;
  this.outerradius = 2*sqrt(pow(radius/2,2)+pow(radius/2,2));
  this.states = 0;
  this.count = 0;
  this.tag = "";
  this.values = [];
  this.scolor = color(190,220,255);
  this.testimg;
  this.setTag = function(tag){
    this.tag = tag;
  }
  
  this.addstate = function(state){
    this.states++;
    this.values.push(state);
  }
  //Drawing the button in given location with current state
  this.draw = function(){

    ellipseMode(CENTER);
    noStroke();
    fill(this.scolor);
    ellipse(this.x,this.y,this.outerradius,this.outerradius);
    
   // image(images[0],10,10);
 
    if(this.states>0){
      image(images[this.count],this.x - this.radius/2, this.y - this.radius/2,this.radius,this.radius);
    }

    textAlign(CENTER,TOP);
    textSize(this.radius/3);
    fill(0);
  
    
    text(this.tag, this.x,this.y+3*radius/4);
    
  }
  
  //this function is called when we click on the button 
  this.onClick = function(mposx,mposy){
    
    //first we check if the mouse position is on the button
    if((mposx > this.x - this.radius/2 && mposx < this.x + this.radius/2) &&
    (mposy > this.y - this.radius/2 && mposy < this.y + this.radius/2)){
      
      //implement the counter to switch states
      this.count++;
      
      //if we have gone through all our states we start again from the first state
      if(this.count >= this.states){
        this.count = 0;
      }
      
    }
    
 } 
 
 this.getState = function(){
   return this.count;
 }
 
 this.setState = function(num){
   this.count=num;
 }
  this.setBackgroundColor = function(newcolor){
   this.scolor = newcolor;
 }

}