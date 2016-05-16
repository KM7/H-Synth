function colorBook(){
  this.colors=Array(12);
  
  this.getsomeColor=function(){
    for(var i=0;i<this.colors.length;i++){
      this.colors[i]=color(255,0+i*24,255-i*24,188);
    }
  }
  
  this.grabColor=function(color_index){
    return this.colors[color_index];
  }
  
  this.getsomeColor();

}