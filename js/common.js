$(function() {
  $('.header__button-menu').click(function() {
    $('body').addClass('overflow-hidden');
    $('.header__mobile').fadeIn();
  });

  $('.header__mobile-close').click(function() {
    $('body').removeClass('overflow-hidden');
    $('.header__mobile').fadeOut();
  });
});

$(document).ready(function(){   
    $(window).scroll(function () {
        if ($(this).scrollTop() > 0) {
            $('#scroller').fadeIn();
        } else {
            $('#scroller').fadeOut();
        }
    });
    $('#scroller').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 400);
        return false;
    });
});

$('.fancybox').fancybox();

$('input[type=tel]').mask('+7 (999) 999-99-99');



$('header').addClass('original').clone().insertAfter('header').addClass('cloned').css('position','fixed').css('top','0').css('margin-top','0').css('z-index','500').removeClass('original').hide();

scrollIntervalID = setInterval(stickIt, 10);


function stickIt() {

  var orgElementPos = $('.original').offset();
  orgElementTop = orgElementPos.top;               

  if ($(window).scrollTop() >= (orgElementTop)) {
    // scrolled past the original position; now only show the cloned, sticky element.

    // Cloned element should always have same left position and width as original element.     
    orgElement = $('.original');
    coordsOrgElement = orgElement.offset();
    leftOrgElement = coordsOrgElement.left;  
    widthOrgElement = orgElement.css('width');
    $('.cloned').css('left',leftOrgElement+'px').css('top',0).css('width',widthOrgElement).show();
    $('.original').css('visibility','hidden');
  } else {
    // not scrolled past the menu; only show the original menu.
    $('.cloned').hide();
    $('.original').css('visibility','visible');
  }
}


if($(window).width() < 1200 ){ 
  $('.slider').slick({
    arrows: false,
    slidesToShow: 3,
    rows: 1,
    responsive: [

      {
        breakpoint: 1200,
        settings: {
          arrows: true,
          slidesToShow: 2,
          speed: 1000,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          speed: 1000,
          arrows: true,
          rows: 1,
        }
      }
      
    ]
  });
}

$('.services__slider').slick({
  arrows: true,
  slidesToShow: 4,
  speed: 1000,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 2000,
  rows: 1,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        speed: 1000,
        arrows: true,
      }
    },
    {
      breakpoint: 1024,
      settings: {
        arrows: true,
        slidesToShow: 2,
        speed: 1000,
      },
    },
    {
      breakpoint: 1200,
      settings: {
        arrows: true,
        slidesToShow: 3,
        speed: 1000,
      },
    }
  ]
});

$('.galery__slider').slick({
  arrows: true,
  dots: true,
  slidesToShow: 3,
  speed: 1000,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 2000,
  rows: 1,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        speed: 1000,
        arrows: false,
      }
    },
    {
      breakpoint: 1024,
      settings: {
        arrows: true,
        slidesToShow: 2,
        speed: 1000,
      },
    },
    {
      breakpoint: 1200,
      settings: {
        arrows: true,
        slidesToShow: 3,
        speed: 1000,
      },
    }
  ]
});

$('.slider-small').slick({
  arrows: true,
  dots: false,
  slidesToShow: 3,
  speed: 1000,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 2000,
  rows: 1,
  asNavFor: ".slider-big",
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        speed: 1000,
        arrows: true,
      }
    },
    {
      breakpoint: 1024,
      settings: {
        arrows: true,
        slidesToShow: 2,
        speed: 1000,
      },
    },
    {
      breakpoint: 1200,
      settings: {
        arrows: true,
        slidesToShow: 3,
        speed: 1000,
      },
    }
  ]
});
$('.slider-big').slick({
  arrows: false,
  dots: true,
  fade: true,
  asNavFor: ".slider-small",
});

$(document).ready(function($) {
  $('.tab_content').hide();
  $('.tab_content:first').show();
  $('.tabs li:first').addClass('active');
  $('.tabs li').click(function(event) {
    $('.tabs li').removeClass('active');
    $(this).addClass('active');
    $('.tab_content').hide();

    var selectTab = $(this).find('a').attr("href");

    $(selectTab).fadeIn();
  });
});