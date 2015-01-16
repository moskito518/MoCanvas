/* 线对象
   author: moskito
   create time: 2014-05-12
*/

define(function(){
    var Line = function(){};
   
    /*  画一条线
        @param moveToX Number 画笔的横坐标
        @param moveToY Number 画笔的纵坐标
        @param lineToX Number 开始绘画的横坐标
        @param lineToY Number 开始绘画的纵坐标
    */
    Line.prototype.createLine = function(moveToX, moveToY, lineToX, lineToY, lineCap){
        if(!lineCap || lineCap === undefined) lineCap = 'butt';
        var __Mo = this.__MoCanvas;
        __Mo.ctx.lineCap = lineCap;
        __Mo.ctx.beginPath();
        __Mo.ctx.moveTo(moveToX, moveToY);
        __Mo.ctx.lineTo(lineToX, lineToY);
        __Mo.ctx.stroke();
    }
    
    return Line;
});
