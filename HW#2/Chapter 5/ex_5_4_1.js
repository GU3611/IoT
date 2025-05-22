(function () {
    var a = 0;
    var intervalid = null;
    var inner = function () {
        if (++a >= 10) {
            clearInterval(intervalid);
        }
        console.log(a);
    };
    intervalid = setInterval(inner, 100);
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