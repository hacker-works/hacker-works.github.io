$(document).ready(function(){
  //Jobs navigation
  $('.site-header__burger--jobs').on('click', function(){
    var t = $(this)
    if (t.hasClass('is-triggered')) {
      t.removeClass('is-triggered');
      $('.jobs-nav').removeClass('is-visible')
    }

    else {
      t.addClass('is-triggered');
      $('.jobs-nav').addClass('is-visible')
    }

    return false;
  })

  //Show the contact form
  $('.get-in-touch__btn').on('click', function(){
    var t = $(this)
    if (t.hasClass('is-triggered')) {
      t.removeClass('is-triggered');
      $('.get-in-touch').removeClass('is-visible')
    }

    else {
      t.addClass('is-triggered');
      $('.btn-close-form').addClass('is-triggered')
      $('.get-in-touch').addClass('is-visible');

          windowHeight = window.outerHeight;
          siteHeader = $('.site-header').outerHeight(false);
          theForm = $('.get-in-touch')
          formHeight = theForm.outerHeight();
      if (formHeight > siteHeader) {
        setTimeout("$('body').addClass('not-scrollable')", 400);
        $('.get-in-touch').addClass('is-scrollable')
      }
    }

    return false;
  })

  function closeForm() {
    $('.btn-close-form').removeClass('is-triggered');
    $('.get-in-touch__btn').removeClass('is-triggered')
    $('.get-in-touch').removeClass('is-visible')

    if ($('.get-in-touch').hasClass('is-scrollable')) {
      $('.get-in-touch').removeClass('is-scrollable');
      $('body').removeClass('not-scrollable');
    }
  }

  $('.btn-close-form').on('click', function(){
    var t = $(this)
    if (t.hasClass('is-triggered')) {
      closeForm();
    } else {
      t.addClass('is-triggered');
      $('.get-in-touch__btn').addClass('is-triggered')
      $('.get-in-touch').addClass('is-visible')
    }
  });

  //navigation
  $('.site-header__burger--nav').on('click', function(){
    var t = $(this)

    if (t.hasClass('is-triggered')) {

      if ($('.navigation').hasClass('is-scrollable')) {
        $('.navigation').removeClass('is-scrollable');
        $('body').removeClass('not-scrollable');
      }

      t.removeClass('is-triggered');
      $('.navigation').removeClass('is-visible')

    }

    else {
      t.addClass('is-triggered');
      $('.btn-close-nav').addClass('is-triggered')
      $('.navigation').addClass('is-visible')

      siteHeader = $('.site-header').outerHeight(false);
      navHeight = $('.navigation').outerHeight(false);
      // console.log(siteHeader);
      // console.log(navHeight)

      if (navHeight > siteHeader) {
        $('body').addClass('not-scrollable')
        $('.navigation').addClass('is-scrollable')
      }
    }

    return false;
  })

  function closeNav() {
    $('.btn-close-nav').removeClass('is-triggered');
    $('.site-header__burger').removeClass('is-triggered');
    $('.navigation').removeClass('is-visible');

    if ($('.navigation').hasClass('is-scrollable')) {
      $('.navigation').removeClass('is-scrollable');
      $('body').removeClass('not-scrollable');
    }
  }

  $('.btn-close-nav').on('click', function(){
    var t = $(this)

    if (t.hasClass('is-triggered')) {
      closeNav();
    } else {
      t.addClass('is-triggered');
      $('.site-header__burger').addClass('is-triggered');
      $('.navigation').addClass('is-visible');
    }

    return false;
  });

  $(function(){
    var link = $('.navigation').find('a');

    link.on('click', function(){
      if($('.navigation').hasClass('is-visible') && $('.navigation .btn-close').hasClass('is-triggered')) {
        $('.navigation').removeClass('is-visible');
        $('.site-header__burger--nav').removeClass('is-triggered');
      }
    });


    //Some sticky stuff
    $(function(){
      $(window).scroll(function(){
        var headerHeight = $('.site-header').height();

        if($(this).scrollTop() >= headerHeight){
            $('.logo-n-burger').addClass('is-airborne');
            $('.navigation').addClass('is-dark');
        }

        else {
          $('.logo-n-burger').removeClass('is-airborne')
          $('.navigation').removeClass('is-dark');
        }
      });
    });
  });

  //Form labels and inputs and transitions
  $(function(){
    var inputFields = $('.get-in-touch input'),
        inputArea = $('.get-in-touch textarea');

    function onFocusBlurKeyup(e, input) {
      var flyingLabel = input.siblings('label')
          eventType = e.type;
      // console.log(eventType);

      if(input.val().length > 0) {
        // console.log(input.val().length);
        flyingLabel.addClass('hacker-form__label--flying');
      } else {
        // console.log(input.val());
        flyingLabel.removeClass('hacker-form__label--flying');
      }
    }

    inputFields.on('focus blur keyup', function(e){
      onFocusBlurKeyup(e, $(this));
    });

    inputArea.on('focus blur keyup', function(e) {
      onFocusBlurKeyup(e, $(this));
    });
  });

  $(document).keyup(function(e) {
    // escape key
    if (e.keyCode == 27) {
      if ($('.navigation').hasClass('is-visible')) {
        closeNav();
      }
      if ($('.stay-in-touch').hasClass('is-visible')) {
        closeForm();
      }
    }
  });
});

$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 400);
        return false;
      }
    }
  });
});
