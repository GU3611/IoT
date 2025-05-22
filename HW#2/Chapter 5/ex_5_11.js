var createCar = function () {
    var fuel = Math.ceil(Math.random() * 10 + 10);
    var power = Math.ceil(Math.random() * 3 + 2);
    var moved = 0;
    return {
        get moved () {
            return this.moved;
        },
        run: function () {
            var km = Math.ceil(Math.random() * 6);
            var wasteFuel = km / this.power;
            if (this.fuel < wasteFuel) {
                console.log('이동불가');
                return;
            }
            this.fuel -= wasteFuel;
            this.moved += km;
            console.log(km + 'km 이동 (총 ' + this.moved + 'km). 남은 연료: ' + fuel);
        }
    };
};
var car = createCar();