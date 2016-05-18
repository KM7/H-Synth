function GUI(){
  
//this.arraysliders;
//this.arraybuttons;
this.options = new LeftRightButtons(width/2,50,width/4,5);
this.options.setTag("Options");
this.options.setButtonColor(color(155+random(100),155+random(100),155+random(100)));
this.menu = new MenuButton(width-(width+height)/20-(width+height)/40,(width+height)/40,(width+height)/20);
this.menu.setButtonColor(color(155+random(100),155+random(100),155+random(100)));

this.arraysliders=[];

  for(i = 0; i<4;i++){
    temp= new Slider(3*width/20,(i+1)*3*height/20,7*width/10,height/10,0,1);
    temp.setTag("SLIDER "+(i+1));
    temp.setSliderColor(color(155+random(100),155+random(100),155+random(100)));
    this.arraysliders.push(temp);
  }
this.arraysliders[0].setTag("Attack");
this.arraysliders[1].setTag("Delay");
this.arraysliders[2].setTag("Sustain");
this.arraysliders[3].setTag("Release");


this.arraybuttons = [];
  for(i = 0; i<1;i++){
    temp = new SwitchingButton((i+1)*width/4,17*height/20,(width+height)/25);
    temp.addstate(images[0]);
    temp.addstate(images[1]);
    temp.addstate(images[2]);
    temp.addstate(images[3]);
    
    temp.setTag("OSC Shape");
    temp.setBackgroundColor(color(155+random(100),155+random(100),155+random(100)));
    this.arraybuttons.push(temp);
  }
  
    for(i = 1; i<2;i++){
    temp = new SwitchingButton((i+1)*width/4,17*height/20,(width+height)/25);
    temp.addstate(images[0]);
    temp.addstate(images[1]);
    temp.addstate(images[2]);
    temp.addstate(images[3]);
    
    temp.setTag("Scale");
    temp.setBackgroundColor(color(155+random(100),155+random(100),155+random(100)));
    this.arraybuttons.push(temp);
  }
  
    for(i = 2; i<3;i++){
    temp = new SwitchingButton((i+1)*width/4,17*height/20,(width+height)/25);
    temp.addstate(images[0]);
    temp.addstate(images[1]);
    temp.addstate(images[2]);
    temp.addstate(images[3]);
    
    temp.setTag("OSC Shape");
    temp.setBackgroundColor(color(155+random(100),155+random(100),155+random(100)));
    this.arraybuttons.push(temp);
  }
  
this.draw_stage_one=function(){
//draw the menu
rectMode(CORNER);

strokeWeight(1);
this.menu.draw();
//draw the left-right buttun
//this.options.draw();
}
  
this.draw_stage_two=function(){
background(255);
background(255,44,188,188);

rectMode(CORNER);
  for(i = 0; i< this.arraysliders.length;i++){
    this.arraysliders[i].draw();
  }
  
  for(i = 0; i< this.arraybuttons.length;i++){
    this.arraybuttons[i].draw();
  }
  this.menu.draw();
}

this.pressIt=function(control){
  if (control.stage==1){
  
  }else if (control.stage==2){
    
    
  for(i = 0; i< this.arraysliders.length;i++){
    this.arraysliders[i].onClick(mouseX,mouseY);
  }
  
  for(i = 0; i< this.arraybuttons.length;i++){
    this.arraybuttons[i].onClick(mouseX,mouseY);
    println(this.arraybuttons[i].getState());
    control.controlSwitches[i]=this.arraybuttons[i].getState();
  }
  }
  return control;
}


this.releaseIt=function(control){
  if (control.stage==1){
    
    this.options.onClick(mouseX,mouseY);
    
  if(this.menu.isClicked(mouseX,mouseY)){
    //println("CLICKED ON MENU!");
    control.stage=2;
    this.arraysliders[0].setCurrentVal(control.controlValues[3]);
    this.arraysliders[1].setCurrentVal(control.controlValues[4]);
    this.arraysliders[2].setCurrentVal(control.controlValues[5]);
    this.arraysliders[3].setCurrentVal(control.controlValues[6]);
    this.arraybuttons[0].setState(control.controlSwitches[0]);

  }
  
  }else if (control.stage==2){
    
  for(i = 0; i< this.arraysliders.length;i++){
    this.arraysliders[i].onRelease();
    control.controlValues[3+i]=this.arraysliders[i].getCurrentVal();
  }
    if(this.menu.isClicked(mouseX,mouseY)){
    //println("CLICKED ON MENU!");
    control.stage=1;
    soundEngine.updateControl(control);
    soundEngine.update_settings();
    }
 }
  return control;
}

this.dragIt=function(control){
  if (control.stage==1){
  
  }else if (control.stage==2){
   for(i = 0; i< this.arraysliders.length;i++){
    this.arraysliders[i].onDrag(mouseX,mouseY);
  }
  }
  
  return control;
}
  
}