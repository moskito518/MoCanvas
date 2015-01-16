/* 矩形对象
   author: moskito
   create time: 2014-05-12
*/
define(function(){
    var Rect = function(){}
    
    /*  画一个实心的矩形
        @param x Number 起点横坐标
        @param y Number 起点纵坐标
        @param length Number 矩形长度
        @param width NUmber 矩形宽度
    */
    Rect.prototype.createFill = function(x, y, length, width){
        var __Mo = this.__MoCanvas;
        __Mo.ctx.beginPath();
        __Mo.ctx.fillRect(x, y, length, width);
    }
    
    /*  画一个空心的矩形
        @param x Number 起点横坐标
        @param y Number 起点纵坐标
        @param length Number 矩形长度
        @param width NUmber 矩形宽度
    */
    Rect.prototype.createStroke = function(x, y, length, width){
        var __Mo = this.__MoCanvas;
        __Mo.ctx.beginPath();
        __Mo.ctx.strokeRect(x, y, length, width);
    }
    
    return Rect
});