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
});