var osc, fft;
var fuckoff;

function setup() {
  createCanvas(windowWidth, windowHeight);

  osc = new p5.SinOsc(); // set frequency and type
  osc.amp(.5);

  fft = new p5.FFT();
  osc.start();
  fuckoff = new Scaler(1);
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
  
  //println(freq);
  osc.freq(noteToFreqency(freq));

  var amp = map(mouseY, 0, height, 1, .01);
  osc.amp(amp);
}



