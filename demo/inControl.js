function inControl(){

this.controlValues=Array(5);


this.update_control=function(){
this.controlValues[0]=map(mouseX,0,1,0,width);
this.controlValues[1]=map(mouseY,0,1,0,height);
this.controlValues[2]=map(rotationX,0,1,-180,180);
this.controlValues[3]=map(rotationY,0,1,-180,180);
this.controlValues[4]=map(rotationZ,0,1,-180,180);
}

this.update_control();

}