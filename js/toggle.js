var menu = document.getElementById('menu');
var nav = document.getElementById('nav');
var exit = document.getElementById('exit');

menu.addEventListener('click', function (e) {
    nav.classList.toggle('hideMobile');
    e.preventDefault();
});
exit.addEventListener('click', function (e) {
    nav.classList.add('hideMobile');
    e.preventDefault();
});