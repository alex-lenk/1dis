//= vendor/jquery-3.5.0.slim.min.js
//= vendor/jquery.maskedinput.min.js
//= vendor/glider.min.js
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


$(document).ready(function () {
    $('#call-form__tel').mask("+7 (999) 999-99-99");

    $('.menu-toggle').click(function () {
        $('body').toggleClass('menu-opened');
    });
});

new Glider(document.querySelector('.main-info-slider__init'), {
    slidesToShow: 1,
    slidesToScroll: 1,
    scrollLock: true,
    dots: '.main-info-slider__dots',
    arrows: {
        prev: '.main-info-slider__prev',
        next: '.main-info-slider__next'
    }
});
