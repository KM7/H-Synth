//initialize the sound Engine
var soundEngine;
var controlEngine;

function setup() {
  //create the canvas
  createCanvas(windowWidth, windowHeight);
  //create the main sound Engine
  soundEngine=new soundCore(0,0);
  controlEngine=new inControl;
}

function draw() {
  //clear the background
  background(255);
  //start the control update
  controlEngine=new inControl();
  //throw the control into the soundEngine
  soundEngine.updateControl(controlEngine);
  //start the display
  soundEngine.display();
  //start the mainloop update
  soundEngine.ontheRun();
}



