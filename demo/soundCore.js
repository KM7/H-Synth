function soundCore(scale_num,saw_shape,control){
  
this.setShape=function(shape_num){
  switch(shape_num) {
  case 0: 
    this.osc = new p5.TriOsc(); // set frequency and type
    println("Set Triangle Shape Oscillator");  // Does not execute
    break;
  case 1: 
    this.osc = new p5.SawOsc(); // set frequency and type
    println("Set Saw Shape Oscillator");  // Does not execute
    break;
  case 2: 
    this.osc = new p5.SinOsc(); // set frequency and type
    println("Set Triangle Shape Oscillator");  // Does not execute
    break;
  case 3: 
    this.osc = new p5.SqrOsc(); // set frequency and type
    println("Set Triangle Shape Oscillator");  // Does not execute
    break;
}
}

this.osc = new p5.TriOsc(); // set frequency and type
this.filter=new p5.BandPass();
this.setShape();
this.osc.amp(.5);
this.fft = new p5.FFT();
this.osc.disconnect();
this.osc.connect(this.filter);
this.osc.start();
this.noteScale = new Scaler(saw_shape);
this.control;
this.env = new p5.Env();
//TODO
this.env.setADSR(0.05, 0.6, 0.4, 0.5);
this.env.setRange(1, 0);


this.updateControl=function(control){
  this.control=control;
}

this.display=function(){
  var waveform = this.fft.waveform();  // analyze the waveform
  beginShape();
  strokeWeight(5);
  for (var i = 0; i < waveform.length; i++){
    var x = map(i, 0, waveform.length, 0, width);
    var y = map(waveform[i], -1, 1, height, 0);
    vertex(x, y);
  }
  endShape();
}

this.ontheRun=function(){
  //handle the note
  var index=int(hardMap(this.control.getValue(1),0,1,0,this.noteScale.scaleinfo.length-1));
  var noteValue=this.noteScale.scaleinfo[index];
  //println(freq);
  var tempNoteFreq=noteToFreqency(noteValue);
  this.osc.freq(tempNoteFreq);
  this.osc.amp(this.env);
  //handle the filter
 // println(this.control.getValue(6));
  var freq = hardMap(this.control.getValue(6), 0, 1, 20, 15000);
 // println(tempNoteFreq);
  this.filter.freq(tempNoteFreq);
  
  // give the filter a narrow band (lower res = wider bandpass)
  this.filter.res(1);
  
}

this.attack=function(){
  this.env.triggerAttack();
}

this.release=function(){
  this.env.triggerRelease();
}


}

function noteToFreqency(inputValue){
  //make it into midi standard
  inputValue=parseInt(inputValue)-60;
  println ("hey"+inputValue)
  return 440*(pow(2,inputValue/12));
}

function hardMap(input,xb,yb,xbb,ybb){
  var return_value=input;
  if (input<xb){
    return_value=xbb;
  }else if(input>yb){
    return_value=ybb;
  }else{
   return_value=map(input,xb,yb,xbb,ybb);
  }
  return return_value;
}
