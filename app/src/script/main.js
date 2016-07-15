$(document).ready(function () {

    $(function () {
        var slider = $('.slider')
            , sliderContent = slider.html(), // Содержимое слайдера
            slideWidth = $('.slider-box').outerWidth() - 4, // Ширина слайдера
            slideCount = $('.slider div').length, // Количество слайдов
            prev = $('.slider-box .prev'), // Кнопка "назад"
            next = $('.slider-box .next'), // Кнопка "вперед"
            sliderInterval = 3300, // Интервал смены слайдов
            animateTime = 1000, // Время смены слайдов
            course = 1, // Направление движения слайдера (1 или -1)
            margin = -slideWidth; // Первоначальное смещение слайдов

        $('.slider div:last').clone().prependTo('.slider'); // Копия последнего слайда помещается в начало.
        $('.slider div').eq(1).clone().appendTo('.slider'); // Копия первого слайда помещается в конец.
        $('.slider').css('margin-left', -slideWidth); // Контейнер .slider сдвигается влево на ширину одного слайда.

        function nextSlide() { // Запускается функция animation(), выполняющая смену слайдов.
            interval = window.setInterval(animate, sliderInterval);
        }

        function animate() {
            if (margin == -slideCount * slideWidth - slideWidth) { // Если слайдер дошел до конца
                slider.css({
                    'marginLeft': -slideWidth
                }); // то блок .slider возвращается в начальное положение
                margin = -slideWidth * 2;
            } else if (margin == 0 && course == -1) { // Если слайдер находится в начале и нажата кнопка "назад"
                slider.css({
                    'marginLeft': -slideWidth * slideCount
                }); // то блок .slider перемещается в конечное положение
                margin = -slideWidth * slideCount + slideWidth;
            } else { // Если условия выше не сработали,
                margin = margin - slideWidth * (course); // значение margin устанавливается для показа следующего слайда
            }
            slider.animate({
                'marginLeft': margin
            }, animateTime); // Блок .slider смещается влево на 1 слайд.
        }

        function sliderStop() { // Функция преостанавливающая работу слайдера
            window.clearInterval(interval);
        }

        prev.click(function () { // Нажата кнопка "назад"
            if (slider.is(':animated')) {
                return false;
            } // Если не происходит анимация
            var course2 = course; // Временная переменная для хранения значения course
            course = -1; // Устанавливается направление слайдера справа налево
            animate(); // Вызов функции animate()
            course = course2; // Переменная course принимает первоначальное значение
        });
        next.click(function () { // Нажата кнопка "назад"
            if (slider.is(':animated')) {
                return false;
            } // Если не происходит анимация
            var course2 = course; // Временная переменная для хранения значения course
            course = 1; // Устанавливается направление слайдера справа налево
            animate(); // Вызов функции animate()
            course = course2; // Переменная course принимает первоначальное значение
        });

        slider.add(next).add(prev).hover(function () { // Если курсор мыши в пределах слайдера
            sliderStop(); // Вызывается функция sliderStop() для приостановки работы слайдера
        }, nextSlide); // Когда курсор уходит со слайдера, анимация возобновляется.

        nextSlide(); // Вызов функции nextSlide()
    });

});
$(document).ready(function () {
    $("#slider1").owlCarousel({
    
        autoPlay: 3000
        , items: 4
        , itemsDesktop: [1199, 3]
        , itemsDesktopSmall: [979, 3]
    });
});
$(document).ready(function () {
    $("#slider2").owlCarousel({
        autoPlay: 3000
        , items: 4
        , itemsDesktop: [1199, 3]
        , itemsDesktopSmall: [979, 3]
    });
});
$(document).ready(function () {
    $("#slider3").owlCarousel({
        autoPlay: 3000
        , items: 4
        , itemsDesktop: [1199, 3]
        , itemsDesktopSmall: [979, 3]
    });


    /// owl 27
    $(".lastOwl").owlCarousel({
        autoPlay: 3000, 
        items: 2
        ,navigationText: false
        , pagination: false
        , navigation: true


    });
});
$(document).ready(function () {
    $("#single_1").fancybox({
        helpers: {
            title: {
                type: 'float'
            }
        }
    });

    $("#single_2").fancybox({
        openEffect: 'elastic'
        , closeEffect: 'elastic',

        helpers: {
            title: {
                type: 'inside'
            }
        }
    });

    $("#single_3").fancybox({
        openEffect: 'none'
        , closeEffect: 'none'
        , helpers: {
            title: {
                type: 'outside'
            }
        }
    });

    $("#single_4").fancybox({
        helpers: {
            title: {
                type: 'over'
            }
        }
    });
});