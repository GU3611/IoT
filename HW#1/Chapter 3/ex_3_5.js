var a = 1;
delete global.a;                    // false
console.log(a, global.a, this.a);   // 1 1 1

var b = 2;
delete global.b;                    // false
console.log(b, global.b, this.b);   // 2 2 2

global.c = 3;
delete global.c;                    // true
console.log(c, global.c, this.c);   // ReferenceError: c is not defined

global.d = 4;
delete global.d;                    // true
console.log(d, global.d, this.d);   // ReferenceError: d is not defined