$(function() {
  $('.collapsed').click(function() {
    var $answer = $(this).find('.collapse');
    if($answer.hasClass('open')){
      $answer.removeClass('open');
      $answer.slideUp();

    } else {
      $answer.addClass('open');
      $answer.slideDown();
    }
  });
});