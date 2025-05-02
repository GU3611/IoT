var obj = {
    outer: function () {
        console.log(this);      // {outer: ƒ}
        var innerFunc = () => {
            console.log(this);  // {outer: ƒ}
        };
        innerFunc();
    }
};
obj.outer();