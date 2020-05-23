$(function() {
  $('.collapsed').click(function() {
    var $answer = $(this).parents('.panel').find('.collapse');
    console.log($answer);

    if($answer.hasClass('open')){
      $answer.removeClass('open');
      $answer.slideUp();

    } else {
      $answer.addClass('open');
      $answer.slideDown();
    }
  });

  $('.pagetop').click(function() {
    $('html,body').animate({scrollTop:0},'300');
  })

  $('.pagetop').hide();
  $(window).scroll(function() {
    if($(window).scrollTop() > 0) {
      $('.pagetop').fadeIn(600);
    } else {
      $('.pagetop').fadeOut(600);
    }
  })
});