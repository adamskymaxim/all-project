const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      closeELEM = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

closeELEM.addEventListener('click', () => {
    menu.classList.remove('active');
});

$(window).scroll(function() {
    if ($(this).scrollTop() > 400) {
        $('.leftpanel_black').fadeIn('slow');
    } else {
        $('.leftpanel_black').fadeOut()
    }
});


const persent = document.querySelectorAll('.wrapper_two__item-percent'),
      line = document.querySelectorAll('.wrapper_two__item-line div');

persent.forEach( (item, i) => {
    line[i].style.width = item.innerHTML;
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