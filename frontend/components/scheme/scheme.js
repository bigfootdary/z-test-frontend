$(".scheme__wrapper .scheme__box").mouseover(function() {
  $(".scheme__item[data-id=" + $(this).data("id") + "] .scheme__popup").show();
});

$(".scheme__wrapper .scheme__item").mouseleave(function() {
  $(".scheme__item[data-id=" + $(this).data("id") + "] .scheme__popup").hide();
});