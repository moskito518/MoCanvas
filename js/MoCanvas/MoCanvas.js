/*  MoCanvas 入口文件
    author: Moskito
    create time: 2014-05-12
*/
define(['Base', 'Line', 'Rect', 'Circle', 'Img', 'Function'], function(Base, Line, Rect, Circle, Img){
    var MoCanvas = function(){};
    
    MoCanvas.prototype.ctx = null;
    MoCanvas.prototype.canvas = null;
    
    //继承基础类
    MoCanvas.extends(Base);
    //扩展自身方法
    MoCanvas.important(Line, 'Line');
    MoCanvas.important(Rect, 'Rect');
    MoCanvas.important(Circle, 'Circle');
	MoCanvas.important(Img, 'Img');
    //初始化入口函数
    MoCanvas.prototype.init = function(_canvas){
        this.setCanvas(_canvas);
        this.setCtx();
    };
    return MoCanvas;
    
});
