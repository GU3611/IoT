function a () {
    console.log(b);     // [Function: b]
    var b = 'bbb';      // 수집 대상 1 (변수 선언)
    console.log(b);     // bbb
    function b () {     // 수집 대상 2 (함수 선언)
        console.log(b);
    }
}
a();