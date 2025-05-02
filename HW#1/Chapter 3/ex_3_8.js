var obj = {
    methodA: function () { console.log(this); },
    inner: {
        methodB: function () { console.log(this); }
    }
};
obj.methodA();              // { ... }
obj['methodA']();           // { ... }

obj.inner.methodB();        // { methodB: [Function: methodB] }
obj.inner['methodB']();     // { methodB: [Function: methodB] }

obj.inner.methodB();        // { methodB: [Function: methodB] }
obj.inner['methodB']();     // { methodB: [Function: methodB] }
obj['inner'].methodB();     // { methodB: [Function: methodB] }
obj['inner']['methodB']();  // { methodB: [Function: methodB] }