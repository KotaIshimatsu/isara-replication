$(function() {
  $('.collapsed').click(function(e) {
    e.preventDefault();
    var $answer = $(this).parents('.panel').find('.collapse');
    $answer.slideToggle(400);
  });

  // .pagetopをクリックすると、ページの一番上にアニメーションしながら戻る
  $('.pagetop').click(function() {
    $('html,body').animate({scrollTop:0}, 300);
  });

  // スクロールした状態でリロードしたら、ボタンがfadeInして出てくる
  if ($(window).scrollTop() > 0) {
    $('.pagetop').fadeIn(600);
  }
  
  // スクロールした時の挙動
  // .pagetopをスクロール位置に応じて出したり消したりしている
  $(window).scroll(function() {
    if($(window).scrollTop() > 0) {
      $('.pagetop').fadeIn(600);
    } else {
      $('.pagetop').fadeOut(600);
    }
  });
});