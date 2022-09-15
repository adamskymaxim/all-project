$(document).ready(function(){
    $('.carousel__slide').slick({
        speed: 1200,
        adaptiveHeight: false,
        prevArrow: '<button type="button" class="slick-prev"><img src="img/icons/left_solid.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="img/icons/right_solid.svg"></button>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    dots: false,
                    arrows: false       
                }
            }
        ]
    });
    
    $('ul.four__tabs').on('click', 'li:not(.four__tab_active)', function() {
        $(this)
          .addClass('four__tab_active').siblings().removeClass('four__tab_active')
          .closest('div.container').find('div.four__content').removeClass('four__content_active').eq($(this).index()).addClass('four__content_active');
    });

    function toggleSlide(item) {
        $(item).each(function(i) {
            $(this).on('click', function(e) {
                e.preventDefault();
                $('.four-item__content').eq(i).toggleClass('four-item__content_active');
                $('.four-item__list').eq(i).toggleClass('four-item__list_active');
            })
        });
    };

    toggleSlide('.four-item__link');
    toggleSlide('.four-item__back');

    //modal

    $('[data-modal=consultation]').on('click', function() {
        $('.over, #consultation').fadeIn();
    });

    $('.modal__close').on('click', function() {
        $('.over, .modal').fadeOut('fast')
    });

    $('.four-item__buy').each(function(i) {
        $(this).on('click', function() {
            $('#order .modal__lorem').text($('.four-item__subtitle').eq(i).text());
            $('.over, #order').fadeIn('slow');
        });
    });

    function valideForms(form) {
        $(form).validate({
            rules: {
                name: 'required',
                phone: 'required',
                email: {
                    required: true,
                    email: true
                }
            },
            messages: {
                name: "Пожалуйста введите имя",
                phone: "Пожалуйста введите номер телефона",
                email: {
                  required: "пожалуйста введите ваш email",
                  email: "неправильно введен електронний адрес"
                }
            }
        });
    }
    valideForms('#consultation form')
    valideForms('#order form')
    valideForms('#form')

    $('input[name=phone]').mask("+38 (999) 999-99-99");

    $('form').submit(function(e) {
        e.preventDefault();
        if (!$(this).valid()) {
            return;
        }
        $.ajax({
            type: "POST",
            url: "mailer/smart.php",
            data: $(this).serialize()
        }).done(function() {
            $(this).find("input").val("");
            $('#consultation, #order').fadeOut();
            $('.over, #thankyou').fadeIn('slow');
            $('form').trigger('reset');
        });
        return false;
    });

    //scroll

    $(window).scroll(function() {
        if ($(this).scrollTop() > 1600) {
            $('.scrollup').fadeIn('fast');
        }else {
            $('.scrollup').fadeOut()
        };
    });
    const $page = $('html, body');
    $('a[href=#up]').click(function() {
        $page.animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 400);
        return false;
    });

    new WOW().init();
});
