var obj = {
    outer: function () {
        console.log(this);      // {outer: ƒ}
        var innerFunc = function () {
            console.log(this);  // global {global: global, clearImmediate: ƒ, setImmediate: ƒ, clearInterval: ƒ, clearTimeout: ƒ, …}
        };
        innerFunc();
    }
};
obj.outer();