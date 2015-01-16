(function(w, d){
    
    var core = function(){
        return new core.fn.init();
    }
    var rootCore;
    
    core.fn = core.prototype = {
        constructor: core,
        init: function(){
            console.log('core is ready');
        },
        inherits: function(){
            
        }
    }
    
    rootCore = core(d);
    
    core.fn.init.prototype = core.fn;
    
    w.C = core;
 })(window, document);
