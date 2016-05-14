var b;

function setup() {
  
  // Sets the screen to be 720 pixels wide and 400 pixels high
  cnv  = createCanvas(500, 500);
  
  b = new SwitchingButton(250,250,100);
  b.addstate(new loadImage("assets/twitter.png"));
  b.addstate(new loadImage("assets/android.png"));
  b.addstate(new loadImage("assets/apple.png"));
  b.setTag("WAVE");

  c = new Slider(100,100,60,200,0,127);
  c.setTag("SLIDER");

}
function draw(){
  background(255);
  b.draw();
  c.draw();
}

function mousePressed(){
  b.inc(mouseX,mouseY);
  c.inc(mouseX,mouseY);
}

function mouseDragged(){
    c.inc(mouseX,mouseY);
}

function Slider(x,y,barw,barh,minr,maxr){
  this.x= x;
  this.y= y;
  this.barw = barw;
  this.barh = barh;
  this.minr = minr;
  this.maxr = maxr;
  this.count = 1;
  this.tag = "";
  
  this.setTag = function(tag){
    this.tag = tag;
  }
  
  //Drawing the button in given location with current state
  this.draw = function(){
    
    //Drawing the base circle
    ellipseMode(CENTER);
    noStroke();
    fill(190,220,255);
    rect(this.x,this.y,this.barw,this.barh);

    textAlign(CENTER,TOP);
    textSize(14);
    fill(0);
    
    text(this.tag, this.x+this.barw/2,this.y+11*this.barh/10);
  }
  
  //this function is called when we click on the button 
  this.inc = function(mposx,mposy){
    
    //first we check if the mouse position is on the button
    if((mposx > this.x && mposx < this.x + this.barw) &&
    (mposy > this.y && mposy < this.y + this.barh)){
      
      num = map(mouseY,this.y,this.y+this.barh,minr,maxr);
      println(num);

    }
    
 } 
 
}

function SwitchingButton(x,y,radius){
  this.x= x;
  this.y= y;
  this.radius = radius;
  this.outerradius = 2*sqrt(pow(radius/2,2)+pow(radius/2,2));
  this.states = 0;
  this.count = 0;
  this.tag = "";
  this.var = [];
  
  this.testimg;
  this.setTag = function(tag){
    this.tag = tag;
  }
  
  this.addstate = function(state){
    this.states++;
    this.var.push(state);
  }
  //Drawing the button in given location with current state
  this.draw = function(){

    ellipseMode(CENTER);
    noStroke();
    fill(190,220,255);
    ellipse(this.x,this.y,this.outerradius,this.outerradius);

    if(this.states>0){
          this.var[this.count].resize(this.radius,this.radius);
      image(this.var[this.count], this.x - this.radius/2, this.y - this.radius/2);
    }

    textAlign(CENTER,TOP);
    textSize(20);
    fill(0);
    
    text(this.tag, this.x,this.y+3*radius/4);
    
  }
  
  //this function is called when we click on the button 
  this.inc = function(mposx,mposy){
    
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
 
}