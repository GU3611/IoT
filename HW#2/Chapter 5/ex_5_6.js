var fruits = ['apple', 'banana', 'peach'];
var $ul = document.createElement('ul');

fruits.forEach(function (fruits) {
    var $li = document.createElement('li');
    $li.innerText = fruits;
    $li.addEventListener('click', function () {
        alert('your choice is ' + fruit);
    });
    $ul.appendChild($li);
});
document.body.appendChild($ul);