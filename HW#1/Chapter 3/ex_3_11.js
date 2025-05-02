var obj = {
    outer: function () {
        console.log(this);          // (1) { outer: [Function: outer] }
        var innerFunc = () => {
            console.log(this);      // (2) { outer: [Function: outer] }
        };
        innerFunc();
    }
};
obj.outer();