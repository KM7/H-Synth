var arraysliders;
var arraybuttons;
var options;
var menu;

function setup() {
  
  // Sets the screen to be 720 pixels wide and 400 pixels high
  cnv  = createCanvas(windowWidth, windowHeight);
  
  arraysliders = [];
  for(i = 0; i<4;i++){
    temp= new Slider(3*width/20,(i+1)*3*height/20,7*width/10,height/10,0,127);
    temp.setTag("SLIDER "+(i+1));
    temp.setSliderColor(color(155+random(100),155+random(100),155+random(100)));
    arraysliders.push(temp);
  }

  arraybuttons = [];
  for(i = 0; i<3;i++){
    temp = new SwitchingButton((i+1)*width/4,17*height/20,width/20);
    temp.addstate(new loadImage("assets/twitter.png"));
    temp.addstate(new loadImage("assets/android.png"));
    temp.addstate(new loadImage("assets/apple.png"));
    temp.setTag("BUTTON "+(i+1));
    temp.setBackgroundColor(color(155+random(100),155+random(100),155+random(100)));
    arraybuttons.push(temp);
  }
  
  options = new LeftRightButtons(width/2,50,width/4,5);
  options.setTag("Options");
  options.setButtonColor(color(155+random(100),155+random(100),155+random(100)));
  
  menu = new MenuButton(9*width/10,width/20,width/20);
  menu.setButtonColor(color(155+random(100),155+random(100),155+random(100)));
}

function draw(){
  background(255);
  
  for(i = 0; i< arraysliders.length;i++){
    arraysliders[i].draw();
  }
  
  for(i = 0; i< arraybuttons.length;i++){
    arraybuttons[i].draw();
  }

  options.draw();
  
  menu.draw();
}

function mousePressed(){
  for(i = 0; i< arraysliders.length;i++){
    arraysliders[i].onClick(mouseX,mouseY);
  }
  
  for(i = 0; i< arraybuttons.length;i++){
    arraybuttons[i].onClick(mouseX,mouseY);
  }
  
  options.onClick(mouseX,mouseY);
  
  if(menu.isClicked(mouseX,mouseY)){
    println("CLICKED ON MENU!")
  }
}

function mouseDragged(){
  for(i = 0; i< arraysliders.length;i++){
    arraysliders[i].onDrag(mouseX,mouseY);
  }
}

function mouseReleased(){
  for(i = 0; i< arraysliders.length;i++){
    arraysliders[i].onRelease();
  }
}

