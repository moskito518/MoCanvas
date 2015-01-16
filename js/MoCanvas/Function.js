/*  扩展Function函数
    author: Moskito
    create time: 2014-05-12
*/
define(function(){
    /* 扩展增加方法函数
       @param name string 方法名
       @param func function 方法体
    */
    Function.prototype.Method = function(name, func){
        if(!this.prototype[name]){
            this.prototype[name] = func;
        }
    }
    
    
    /* 增加继承方法
       @param Parent object 父类 
    */
    Function.prototype.extends = function(Parent){
        var prop;
        //循环遍历父类的方法
        for(prop in Parent.prototype){
            var proto = this.prototype;
            if(!proto[prop]){
                proto[prop] = Parent.prototype[prop];
            }
        }
        this.prototype.constructor = this;
        this.super = Parent.prototype;
        return this;
    }
    
    /* 将模块中的方法扩展到基本库中
       @param imp object 模块
       @param imp_name string 模块名称
    */
    Function.prototype.important = function(imp, imp_name){
        var prop;
        var proto = this.prototype;
        var _self = this;
        if(!proto[imp_name]){
            proto[imp_name] = {};
        }
        proto[imp_name].__MoCanvas = this.prototype;
        //循环遍历父类的方法
        for(prop in imp.prototype){
            if(!proto[imp_name][prop]){
                proto[imp_name][prop] = imp.prototype[prop];
            }
        }
        return this;
    }
    
});
