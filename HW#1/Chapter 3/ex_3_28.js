var obj = {
    logThis: function () {
        console.log(this);
    },
    logThisLater1: function () {
        setTimeout(this.logThis, 500);
    },
    logThisLater2: function () {
        setTimeout(this.logThis.bind(this), 1000);
    }
};
obj.logThisLater1(); // Timeout {_idleTimeout: 500, _idlePrev: null, _idleNext: null, _idleStart: 118, _onTimeout: ƒ, …}
obj.logThisLater2(); // {logThis: ƒ, logThisLater1: ƒ, logThisLater2: ƒ}