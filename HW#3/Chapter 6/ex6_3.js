var arr = [1, 2];
Array.prototype.constructor === Array
arr._proto_.constructor === Array
arr.constructor === Array

var arr2 = new arr.constuctor(3, 4);
console.log(arr2);