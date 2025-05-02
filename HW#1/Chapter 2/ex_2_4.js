function a () {
    var x;          // 수집 대상 1의 변수 선언 부분
    var x;          // 수집 대상 1의 변수 선언 부분
    var x;          // 수집 대상 1의 변수 선언 부분

    x = 1;
    console.log(x); // 1
    console.log(x); // 1
    x = 2;          // 수집 대상 3의 할당 부분
    console.log(x); // 2
}

a(1);