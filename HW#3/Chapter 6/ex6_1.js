var Person = function (name) {
    this._name = name;
};

Person.prototype.getName = function() {
    return this._name;
}

//var suzi = new Person('suzi');
//suzi._proto_._name = 'SUZI_proto_';
//suzi._proto_.getName();

//Person.protype === suzi._proto_