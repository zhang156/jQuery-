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

//console.log(aQuery())

var test = function() {
    return this;
}

test.prototype = Object.prototype;


var obj = {
    test: test
}

var obj2 = {
    str: '继承来的'
}

console.log(obj.test.prototype)

console.log(test.call(obj2))
console.log(new obj.test())

console.log(toString.call(new obj.test()))
console.log($.isPlainObject(new obj.test()))


var extend = function() {
    var src, copyIsArray, copy, name, options, clone,
        target = arguments[0] || {},    // 常见用法 jQuery.extend( obj1, obj2 )，此时，target为arguments[0]
        i = 1,
        length = arguments.length,
        deep = false;

    // Handle a deep copy situation
    if ( typeof target === "boolean" ) {    // 如果第一个参数为true，即 jQuery.extend( true, obj1, obj2 ); 的情况
        deep = target;  // 此时target是true
        target = arguments[1] || {};    // target改为 obj1
        // skip the boolean and the target
        i = 2;
    }

    // Handle case when target is a string or something (possible in deep copy)
    if ( typeof target !== "object" && target.constructor !== Function) {  // 处理奇怪的情况，比如 jQuery.extend( 'hello' , {nick: 'casper})~~
        target = {};
    }

    // extend jQuery itself if only one argument is passed
    if ( length === i ) {   // 处理这种情况 jQuery.extend(obj)，或 jQuery.fn.extend( obj )
        target = this;  // jQuery.extend时，this指的是jQuery；jQuery.fn.extend时，this指的是jQuery.fn
        --i;
    }

    for ( ; i < length; i++ ) {
        // Only deal with non-null/undefined values
        if ( (options = arguments[ i ]) != null ) { // 比如 jQuery.extend( obj1, obj2, obj3, ojb4 )，options则为 obj2、obj3...
            // Extend the base object
            for ( name in options ) {
                src = target[ name ];
                copy = options[ name ];

                // Prevent never-ending loop
                if ( target === copy ) {    // 防止自引用，不赘述
                    continue;
                }

                // Recurse if we're merging plain objects or arrays
                // 如果是深拷贝，且被拷贝的属性值本身是个对象
                if ( deep && copy && ( jQuery.isPlainObject(copy) || (copyIsArray = jQuery.isArray(copy)) ) ) {
                    if ( copyIsArray ) {    // 被拷贝的属性值是个数组
                        copyIsArray = false;
                        clone = src && jQuery.isArray(src) ? src : [];

                    } else {    //被拷贝的属性值是个plainObject，比如{ nick: 'casper' }
                        clone = src && jQuery.isPlainObject(src) ? src : {};
                    }

                    // Never move original objects, clone them
                    target[ name ] = jQuery.extend( deep, clone, copy );  // 递归~

                // Don't bring in undefined values
                } else if ( copy !== undefined ) {  // 浅拷贝，且属性值不为undefined
                    target[ name ] = copy;
                }
            }
        }
    }

    // Return the modified object
    return target;
}

var tmp1 = {};
var tmp = {
    a: 1,
    b: {
        c: 1,
        d: 2
    }
}

tmp1 = extend(true,{},tmp);
tmp1.a = 10;
console.log(tmp,tmp1)
