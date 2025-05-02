var func = function (x) {
    console.log(this, x);
};
func(1);        // Object [Global] { ... } 1

var obj = {
    method: func
};
obj.method(2);  // { mehtod: [Function: func] } 2