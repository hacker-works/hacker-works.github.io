$(document).ready(function(){
  $('.site-header__burger').on('click', function(){
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
      $('.btn-close').addClass('is-triggered')
      $('.get-in-touch').addClass('is-visible')
    }

    return false;
  })

  $('.btn-close').on('click', function(){
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
});
