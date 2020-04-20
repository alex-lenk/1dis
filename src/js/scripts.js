// = vendor/jquery-3.5.0.slim.min.js
// = vendor/jquery.maskedinput.min.js
//= vendor/glider.min.js

/*function clickHeaderToggle() {
    document.querySelector('body').classList.toggle('menu-opened');
}*/

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


let hamburger = document.querySelector('.header-toggle'),
    menu = document.querySelector('.nav-wrap'),
    bodyElement = document.querySelector('body');

const toggleMenu = () => {
    bodyElement.classList.toggle('menu-opened');
};

hamburger.addEventListener('click', e => {
    e.stopPropagation();

    toggleMenu();
});

document.addEventListener('click', e => {
    let target = e.target;
    let its_menu = target === menu || menu.contains(target);
    let its_hamburger = target === hamburger;
    let menu_is_active = bodyElement.classList.contains('menu-opened');

    if (!its_menu && !its_hamburger && menu_is_active) {
        toggleMenu();
    }
});


window.addEventListener("DOMContentLoaded", function () {
    //document.querySelector('.header-toggle').addEventListener("click", clickHeaderToggle);


    [].forEach.call(document.querySelectorAll('.tel'), function (input) {
        var keyCode;

        function mask(event) {
            event.keyCode && (keyCode = event.keyCode);
            var pos = this.selectionStart;
            if (pos < 3) event.preventDefault();
            var matrix = "+7 (___) ___ ____",
                i = 0,
                def = matrix.replace(/\D/g, ""),
                val = this.value.replace(/\D/g, ""),
                new_value = matrix.replace(/[_\d]/g, function (a) {
                    return i < val.length ? val.charAt(i++) || def.charAt(i) : a
                });
            i = new_value.indexOf("_");
            if (i !== -1) {
                i < 5 && (i = 3);
                new_value = new_value.slice(0, i)
            }
            var reg = matrix.substr(0, this.value.length).replace(/_+/g,
                function (a) {
                    return "\\d{1," + a.length + "}"
                }).replace(/[+()]/g, "\\$&");
            reg = new RegExp("^" + reg + "$");
            if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) this.value = new_value;
            if (event.type === "blur" && this.value.length < 5) this.value = ""
        }

        input.addEventListener("input", mask, false);
        input.addEventListener("focus", mask, false);
        input.addEventListener("blur", mask, false);
        input.addEventListener("keydown", mask, false)
    });
});