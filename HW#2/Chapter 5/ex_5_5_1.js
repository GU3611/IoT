var outer = (function () {
    var a = 1;
    var inner = function () {
        return ++a;
    };
    return inner;
})();
console.log(outer()); // 2
console.log(outer()); // 3
outer = null;