var globalFoo;

exports.setFoo = function(val){
    globalFoo = val;
}

exports.getFoo = function(){
    return globalFoo;
}