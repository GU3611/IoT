var obj = {
    method: function (x) { console.log(this, x); }
};
obj.method(1);      // { method: [Function: method] } 1
obj['method'](2);   // { method: [Function: method] } 2