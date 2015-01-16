/*  基础核心库
    author: Moskito
    create time: 2014-05-12
*/

define(function(){
    var Base = function(){}
    /*  设置画布
        @param _canvas string 要渲染的画布ID
    */
    Base.prototype.setCanvas = function(_canvas){
        this.canvas = document.getElementById(_canvas);
    }
    //设置上下文
    Base.prototype.setCtx = function(){
        this.ctx = this.canvas.getContext('2d');
    }
    /*  设置画笔线条宽度
        @param width Number 画笔线条的宽度值
    */
    Base.prototype.setLineW = function(width){
        this.ctx.lineWidth = width;
    }
    /*  设置画笔颜色
        @param style String 画笔的色值
    */
    Base.prototype.setStrokeStype = function(style){
        this.ctx.strokeStyle = style;
    }
    
    /*  设置填充颜色
        @param style String 填充的色值
    */
    Base.prototype.setFillStyle = function(style){
        this.ctx.fillStyle = style;
    }
    
    return Base;
});
