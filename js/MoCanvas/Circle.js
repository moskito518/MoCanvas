/* 圆对象
   author： moskito
   create time: 2014-05-12
*/
define(function(){
   var Circle = function(){}
   
   /* 画圆弧
      @param x Number 横坐标
      @param y Number 纵坐标
      @param r Number 圆弧半径
      @param startDirection Number 起始角度
      @param endDirection Number 结束角度
      @param contrarotate Bool 是否逆时针旋转
      @param isFill Bool 是否填充成实心圆
   */
   Circle.prototype.create = function(x, y, r, startDirection, endDirection, contrarotate, isFill){
       var __Mo = this.__MoCanvas;
       __Mo.ctx.beginPath();
       __Mo.ctx.arc(x, y, r, startDirection, endDirection, contrarotate);
       if(!isFill || isFill === undefined) isFill = false;
       if(isFill){
            __Mo.ctx.fill();
       }else{
            __Mo.ctx.stroke();
       }
       return this;
   }
   
   
   return Circle;
});