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

}