$(function() {
  $('.collapsed').click(function(e) {
    e.preventDefault();
    var $answer = $(this).parents('.panel').find('.collapse');
    $answer.slideToggle(400);
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