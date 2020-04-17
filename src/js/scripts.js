//= vendor/jquery-3.5.0.slim.min.js
//= vendor/jquery.maskedinput.min.js

$(document).ready(function () {
    $('#call-form__tel').mask("+7 (999) 999-99-99");

    $('.menu-toggle').click(function () {
        $('body').toggleClass('menu-opened');
        //$('.menu-nav__inner').toggleClass('menu-nav__inner-open');
    });
});
/*
* 0.
* 1.
* 2.
* 3.
* 4.
* 5.
* 6.
* 7.
* 8.
* 9.
* 10.
*/
