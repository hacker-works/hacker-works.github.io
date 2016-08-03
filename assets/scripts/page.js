$(document).ready(function(){
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

  $('.get-in-touch__btn').on('click', function(){
    var t = $(this)
    if (t.hasClass('is-triggered')) {
      t.removeClass('is-triggered');
      $('.get-in-touch').removeClass('is-visible')
    }

    else {
      t.addClass('is-triggered');
      $('.btn-close-form').addClass('is-triggered')
      $('.get-in-touch').addClass('is-visible')
    }

    return false;
  })

  $('.btn-close-form').on('click', function(){
    var t = $(this)
    if (t.hasClass('is-triggered')) {
      t.removeClass('is-triggered');
      $('.get-in-touch__btn').removeClass('is-triggered')
      $('.get-in-touch').removeClass('is-visible')
    }

    else {
      t.addClass('is-triggered');
      $('.get-in-touch__btn').addClass('is-triggered')
      $('.get-in-touch').addClass('is-visible')
    }
  });

  //navigation
  $('.site-header__burger--nav').on('click', function(){
    var t = $(this)

    if (t.hasClass('is-triggered')) {
      t.removeClass('is-triggered');
      $('.navigation').removeClass('is-visible')
    }

    else {
      t.addClass('is-triggered');
      $('.btn-close-nav').addClass('is-triggered')
      $('.navigation').addClass('is-visible')
    }

    return false;
  })

  $('.btn-close-nav').on('click', function(){
    var t = $(this)

    if (t.hasClass('is-triggered')) {
      t.removeClass('is-triggered');
      $('.site-header__burger').removeClass('is-triggered')
      $('.navigation').removeClass('is-visible')
    }

    else {
      t.addClass('is-triggered');
      $('.site-header__burger').addClass('is-triggered')
      $('.navigation').addClass('is-visible')
    }

    return false;
  });

  //Some sticky stuff
  $(function(){
    $(window).scroll(function(){
      var headerHeight = $('.site-header').height();

      if($(this).scrollTop() >= headerHeight){
          $('.logo-n-burger').addClass('is-airborne');
      }

      else {
        $('.logo-n-burger').removeClass('is-airborne')
      }
    });
  });
});
