/* 图像处理方法
 * author: moskito
 * create time: 2014-05-15
 */

define(function(){
	var Img = function(){}	

	/*
	 * 创建一个图像对象，用于添加到画布上
	 * @param src string 图像的路径
	 */
	Img.prototype.setImg = function(src){
		var img = new Image();
		console.log(img);
		img.src = src;
		return img;
	}

	/*
	 * 在画布上添加一个图像
	 * @param obj object 生成的图像对象
	 * @param x Number 横坐标地址
	 * @param y Number 纵坐标地址
	 */
	Img.prototype.create = function(obj, x, y){
		var __Mo = this.__MoCanvas;
		__Mo.ctx.drawImage(obj, x, y);
		return {
			'obj': obj,
			'x': x,
			'y': y
		};
	}

	return Img;
});
