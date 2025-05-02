function a () {
    var b;
    var b = function b () { }   // <- 바뀐 부분

    console.log(b);             // [Function: b]
    b = 'bbb';
    console.log(b);             // bbb
    console.log(b);             // bbb
}
a();