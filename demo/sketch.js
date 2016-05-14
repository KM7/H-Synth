var osc, fft;
var fuckoff;

function setup() {
  createCanvas(windowWidth, windowHeight);

  osc = new p5.TriOsc(); // set frequency and type
  osc.amp(.5);

  fft = new p5.FFT();
  osc.start();
  fuckoff = new Scaler(5);
  //fuckoff.scale;
}

function draw() {
  background(255);
  var waveform = fft.waveform();  // analyze the waveform
  beginShape();
  strokeWeight(5);
  for (var i = 0; i < waveform.length; i++){
    var x = map(i, 0, waveform.length, 0, width);
    var y = map(waveform[i], -1, 1, height, 0);
    vertex(x, y);
  }
  endShape();

  // change oscillator frequency based on mouseX
  var index = int(map(mouseX, 0, width, 20, 30));
  var freq=fuckoff.scaleinfo[index];
  
  println(freq);
  osc.freq(hitNote(freq));

  var amp = map(mouseY, 0, height, 1, .01);
  osc.amp(amp);
  
}


function hitNote(inputValue){
  //make it into midi standard
  inputValue=parseInt(inputValue)-60;
 // println ("hey"+inputValue)
  return 440*(pow(2,inputValue/12));
}

// number for choosing indexing
function Scaler(scale_num){
//index of the total scales
this.scale_num=int(scale_num);

if (this.scale_num>2||this.scalenum<0){
  this.scale_num=0;
}


this.getScale=function(){
  var temp_scale=[];
  var scale_num=1;
  switch(this.scale_num) {
  case 0: 
    temp_scale=[0,2,4,5,7,9,11]
    println("Zero");  // Does not execute
    break;
  case 1: 
    temp_scale=[0,2,5,7,9]
    println("One");  // Prints "One"
    break;
  case 2: 
    temp_scale=[0,1,2,3,4]
    println("One");  // Prints "One"
    break;
}
return this.kickthefuckout(temp_scale);
}

this.kickthefuckout=function(tempscl){
var matrix_array=[];
for (var i=0;i<127;i++){
  var tempModular=i%12;
  //println(tempModular);
    if (tempscl.indexOf(tempModular)!=-1){
      matrix_array.push(i);
    }
  }
  return matrix_array;
}


this.scaleinfo=this.getScale();
this.totalSize=this.scaleinfo.length;

  


//get the scale



}
