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
 * 7 for reserve
 * 8 for reserve
 **/
 
this.controlValues=Array(8);


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

this.controlMapper=[1,0,0,2,0];

this.update_control=function(){
if (mouseIsPressed){
this.controlValues[this.controlMapper[0]]=map(mouseX,0,width,0.0,1);
this.controlValues[this.controlMapper[1]]=map(mouseY,0,height,0,1);
}
this.controlValues[this.controlMapper[2]]=map(rotationX,-180,180,0,1);
this.controlValues[this.controlMapper[3]]=map(rotationY,-180,180,0,1);
this.controlValues[this.controlMapper[4]]=map(rotationZ,-180,180,0,1);
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
  return this.controlValues[1];
}

}