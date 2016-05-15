//initialize the sound Engine
var soundEngine;

function setup() {
  //create the canvas
  createCanvas(windowWidth, windowHeight);
  //create the main sound Engine
  soundEngine=new soundCore(0,0);
}

function draw() {
  //clear the background
  background(255);
  //start the control update
  soundEngine.display();
  //start the mainloop update
  soundEngine.ontheRun();
}



