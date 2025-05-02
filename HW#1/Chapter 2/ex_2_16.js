var a = 1;
var outer = function () {
    var b = 2;
    var inner = function () {
        console.log(b); // 2
        debugger;       // Pause
    };
    inner();
};
outer();