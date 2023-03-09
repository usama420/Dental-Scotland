var $question = $(".accordion__header"); // accordion opener
var $answer = $(".accordion__body"); // accordion content

$answer.hide();

$question.click(function () {
  $answer.slideUp();
  if ($(this).hasClass("open")) {
    $(this).removeClass("open").next($answer).slideUp();
  } else {
    $question.removeClass("open");
    $(this).addClass("open").next($answer).slideDown();
  }
});