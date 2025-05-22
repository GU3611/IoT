(function () {
    var a = 0;
    var intervalid = null;
    var inner = function () {
        if (++a >= 10) {
            clearInterval(intervalid);
            inner = null;
        }
        console.log(a);
    };
    intervalid = setInterval(inner, 1000);
})();

// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10