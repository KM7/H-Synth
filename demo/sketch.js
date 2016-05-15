//initialize the sound Engine
var soundEngine;
var controlEngine;

function setup() {
  //create the canvas
  createCanvas(windowWidth, windowHeight);
  //create the main sound Engine
  controlEngine=new inControl();
  soundEngine=new soundCore(0,0,controlEngine);
}

function draw() {
  //clear the background
  background(255);
  //start the control update
  controlEngine.update_control();
  //throw the control into the soundEngine
  soundEngine.updateControl(controlEngine);
  //start the display
  soundEngine.display();
  //start the mainloop update
  soundEngine.ontheRun();
  
}

function mousePressed(){
  soundEngine.attack();
}

function mouseReleased(){
  soundEngine.release();
}
