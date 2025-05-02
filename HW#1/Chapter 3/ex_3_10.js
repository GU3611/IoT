var obj = {
    outer: function () {
        console.log(this);              // (1) { outer: [Function: outer] }
        var innerFunc1 = function () {
            console.log(this);          // (2) Object [global] { ... }
        };
        innerFunc1();

        var self = this;
        var innerFunc2 = function () {
            console.log(self);          // (3) { outer: [Function: outer] }
        };
        innerFunc2();
    }
};
obj.outer();