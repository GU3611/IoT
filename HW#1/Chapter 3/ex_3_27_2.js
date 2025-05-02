var obj = {
    outer: function () {
        console.log(this);      // {outer: ƒ}
        var innerFunc = function () {
            console.log(this);  // {outer: ƒ}
        }.bind(this);
        innerFunc();
    }
};
obj.outer();