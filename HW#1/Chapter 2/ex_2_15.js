var a = 1;
var outer = function () {
    var b = 2;
    var inner = function () {
        console.log(b);     // 2
        console.dir(inner); // [Function: inner]
    };
    inner();
};
outer();