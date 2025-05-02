var obj1 = {
    outer: function () {
        console.log(this);              // (1) { outer: [Function: outer] }
        var innerFunc = function () {
            console.log(this)           // (2) (3) 
        }
        innerFunc();                    // Object [global] { ... }

        var obj2 = {
            innerMethod: innerFunc
        };
        obj2.innerMethod();             // { innerMethod: [Function: innerFunc] }
    }
};
obj1.outer();