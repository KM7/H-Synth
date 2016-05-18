//initialize the sound Engine
var soundEngine;
var controlEngine;
var gui;
var images = Array(4);
var k=140;
var decrease=true;

function setup() {
  //create the canvas
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER); // Set rectMode to CENTER
  textAlign(CENTER);
  imageMode(CENTER);

  //create the main sound Engine
  controlEngine = new inControl();
  soundEngine = new soundCore(controlEngine);
  gui = new GUI();
}

function draw() {
  //clear the background
  background(55);
  if (controlEngine.stage == 0) {
  background(255,0+k,255-k,255,140);
    image(images[4], width / 2, height / 2,width,width);
    image(images[5], width / 2, height / 2+height / 16,width*0.8,width*0.8);
    //text("H-Synth V0.1", width / 2, height / 2 + windowHeight / 10);
    //text("Touch anywhere to start", width / 2, height / 2 + windowHeight / 5);

  } else if (controlEngine.stage == 1) {
    image(images[4], width / 2, height / 2,width,width);
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
  } else if (controlEngine.stage == 2) {
    this.gui.draw_stage_two();
  }
  
  if (decrease){
   k--;
  }else{
   k++;
  }
  if (k<125){
    decrease=false;
  }
  if (k>254){
    decrease=true;
  }
}

function mousePressed() {
  if (controlEngine.stage == 0) {} else if (controlEngine.stage == 1) {
    soundEngine.attack();
  } else if (controlEngine.stage == 2) {
    controlEngine = gui.pressIt(controlEngine);
  }
}

function mouseReleased() {
  if (controlEngine.stage == 0) {
    controlEngine.stage = 1;
  } else if (controlEngine.stage == 1) {
    soundEngine.release();
    controlEngine = gui.releaseIt(controlEngine);
    //println(controlEngine.stage);
  } else if (controlEngine.stage == 2) {
    controlEngine = gui.releaseIt(controlEngine);
  }
}

function mouseDragged() {
  if (controlEngine.stage == 0) {} else if (controlEngine.stage == 1) {} else if (controlEngine.stage == 2) {
    controlEngine = gui.dragIt(controlEngine);
  }
}

function preload() {
  images[0] = loadImage("assets/twitter.png");
  images[1] = loadImage("assets/android.png");
  images[2] = loadImage("assets/apple.png");
  images[3] = loadImage("assets/apple.png");
  images[4] = loadImage("img/logo.png");
  images[5] = loadImage("img/press.png");
}