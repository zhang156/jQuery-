(function(){

})();

var aQuery = function() {
    return new aQuery.prototype.init();
}

aQuery.prototype = {
    length: 0,
    init: function() {
        return this;
    }
}

aQuery.prototype.init.prototype = aQuery.prototype;

console.log(aQuery())