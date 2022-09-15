$(document).ready(function(){
    $('.promo__slider').slick({
      arrows: true,
      dots: true,
      speed: 1200,
      prevArrow: '<button type="button" class="slick-prev"><img src="img/icons/miniarrow-prev.png"></img></button>',
      nextArrow: '<button type="button" class="slick-next"><img src="img/icons/miniarrow-next.png"></img></button>',
      Infinity: true
    });
  });


$(document).ready(function(){
  $('.industry__carousel').slick({
      speed: 1200,
      adptiveHeght: false,
      prevArrow: '<button type="button" class="slick-prev"><img src="img/icons/arrow-left.png"></img></button>',
      nextArrow: '<button type="button" class="slick-next"><img src="img/icons/arrow-right.png"></img></button>',
      Infinity: true,
      variableWidth: true,
      responsive: [
        {
          breakpoint: 576,
          settings: {
            arrows: false,
            dots: true
          }
        }
      ]
  });
});


const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.nav'),
      closenav = document.querySelector('.close');

hamburger.addEventListener('click', () => {
  menu.classList.add('nav_active');
});

closenav.addEventListener('click', () => {
  menu.classList.remove('nav_active');
});
      