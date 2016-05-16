//initialize the sound Engine
var soundEngine;
var controlEngine;
var gui;

function setup() {
  //create the canvas
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);  // Set rectMode to CENTER
  textAlign(CENTER);
  //create the main sound Engine
  controlEngine=new inControl();
  soundEngine=new soundCore(controlEngine);
  gui=new GUI();
}

function draw() {
  //clear the background
  background(55);
  
  if (controlEngine.stage==0){
  push();
  translate(0,-windowHeight/5);
  soundEngine.display();
  pop();
  text("H-Synth V0.1",width/2,height/2+windowHeight/10);
  text("Touch anywhere to start",width/2,height/2+windowHeight/5);
  
  }else if (controlEngine.stage==1){
  //start the control update
  controlEngine.update_control();
  //throw the control into the soundEngine
  soundEngine.updateControl(controlEngine);
  //start the display
  soundEngine.draw_all_keys();
  //start drawing keys
  stroke(255);
  soundEngine.display();
  //start the mainloop update
  soundEngine.ontheRun();
  gui.draw_stage_one();
  }else if (controlEngine.stage==2){
  this.gui.draw_stage_two();
  }
  
}

function mousePressed(){
    if (controlEngine.stage==0){
    }else if (controlEngine.stage==1){
  soundEngine.attack();
    }else if (controlEngine.stage==2){
  controlEngine=gui.pressIt(controlEngine);
    }
}

function mouseReleased(){
    if (controlEngine.stage==0){
    controlEngine.stage=1;
    }else if (controlEngine.stage==1){
     soundEngine.release();
     controlEngine=gui.releaseIt(controlEngine);
     //println(controlEngine.stage);
  } else if (controlEngine.stage==2){
     controlEngine=gui.releaseIt(controlEngine);
    }
}

function mouseDragged(){
      if (controlEngine.stage==0){
    }else if (controlEngine.stage==1){
    }else if (controlEngine.stage==2){
        controlEngine=gui.dragIt(controlEngine);
    }
}
