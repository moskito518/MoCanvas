'use strict';

define(['MoCanvas'], function(MoCanvas){
    var __Mo;
    var myCanvas = function(canvas){
        //继承core的属性
        MoCanvas.apply(this, arguments);
        //声明父类的调用模式
        __Mo = this.MoCanvas = this.constructor.super;
        //调用CORE框架的初始化画布方法
        __Mo.init(canvas);
        //调用自身的初始化方法
        this.start();
    }.extends(MoCanvas);
    
    myCanvas.prototype.start = function(){
        this.threeLine();
        this.strokeRect();
        this.fillRect();
        this.createCircle();
		this.createEgg();
    }

    myCanvas.prototype.threeLine = function(){
        __Mo.setLineW(10);
        __Mo.setStrokeStype('red');
        __Mo.Line.createLine(10, 10, 150, 10);
        __Mo.Line.createLine(10, 40, 150, 40, 'round');
        __Mo.Line.createLine(10, 70, 150, 70, 'square');
    }

    myCanvas.prototype.strokeRect = function(){
        __Mo.setLineW(5);
        __Mo.setStrokeStype('blue');
        __Mo.Rect.createStroke(10, 10, 70, 40);
    }

    myCanvas.prototype.fillRect = function(){
        __Mo.setFillStyle('green');
        __Mo.Rect.createFill(10, 60, 70, 40);
    }
    
    myCanvas.prototype.createCircle = function(){
        __Mo.setLineW(5);
        __Mo.setStrokeStype("red");
        __Mo.Circle.create(100, 100, 70, 0, 130 * Math.PI/180, true);
        __Mo.setFillStyle("yellow");
        __Mo.Circle.create(200, 100, 70, 0, 360 * Math.PI/180, true, true);
    }
    
	myCanvas.prototype.createEgg = function(){
		var _img = __Mo.Img.setImg('images/egg_1.png');
		_img.onload = function(){
			var img = __Mo.Img.create(_img, 0, 0);
		}
	}
    return myCanvas;
});
