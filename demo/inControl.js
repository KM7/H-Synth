function inControl(){


/**reserve 0 as not mapping to anything,
 * The index represent the value
 * 0 for nothing(Empty mapping)
 * 1 for pitch
 * 2 for magnitute
 * 3 for Attack time
 * 4 for delay
 * 5 for sustain
 * 6 for release
 * 7 for bandPass
 * 8 for reserve
 **/
 
this.controlValues=Array(9);
this.controlBounds=Array(9);

this.controlBounds[0]=createVector(0,0);
this.controlBounds[1]=createVector(10,35);
this.controlBounds[2]=createVector(0,0);
this.controlBounds[3]=createVector(0,0);
this.controlBounds[4]=createVector(0,0);
this.controlBounds[5]=createVector(0,0);
this.controlBounds[6]=createVector(10,20000);
this.controlBounds[7]=createVector(7,0);

/**reserve 0 as not mapping to anything,
 * The index represent the value
 * 0 for mouseX
 * 1 for mouseY
 * 2 for rotationX
 * 3 for rotationY
 * 4 for rotationZ
 * 
 * 
 **/

this.controlMapper=[1,6,0,5,0];

this.update_control=function(){
this.controlValues[this.controlMapper[0]]=hardMap(mouseX,0,width,0,1);
this.controlValues[this.controlMapper[1]]=hardMap(mouseY,0,height,0,1);
this.controlValues[this.controlMapper[2]]=hardMap(rotationX,-180,180,0,1);
this.controlValues[this.controlMapper[3]]=hardMap(rotationY,-180,180,0,1);
this.controlValues[this.controlMapper[4]]=hardMap(rotationZ,-180,180,0,1);
}

this.initialize_value=function(){
  for (var i=0;i<this.controlValues.length;i++){
    this.controlValues[i]=0.5;
  }
}

this.initialize_value();
this.update_control();

this.getValue=function(value){
  value=int(value);
  //println(this.controlValues);
  return this.controlValues[value];
}

}