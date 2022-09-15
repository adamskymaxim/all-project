$(document).ready(function() {
    $('.feedback__inner').slick({
        speed: 1200,
        adptiveHeght: false,
        prevArrow: '<button type="button" class="slick-prev"><img src="img/icons/arrow-back.png"></img></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="img/icons/arrow-next.png"></img></button>',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrow: false,
                    dots: true
                }
            }
        ]
    });
});

const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.promo__menu'),
      closeElem = document.querySelector('.promo__menu_close');

hamburger.addEventListener('click', () => {
    menu.classList.add('promo__menu_active');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('promo__menu_active');
});


$(document).ready(function() {
    $('form').submit(function(e) {
        e.preventDefault();
        $.ajax({
            type: "POST",
            url: "mailer/smart.php",
            data: $(this).serialize()
        }).done(function() {
            $(this).find("input, textarea").val("");
            $('form').trigger('reset');
        });
        return false;
    });
});
