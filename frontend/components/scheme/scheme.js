console.log("scheme");

$(".scheme__wrapper .scheme__box").click(function() {
  $(".scheme__popup").hide();
  $(".scheme__item[data-id=" + $(this).data("id") + "] .scheme__popup").show();
});

$("body").click(function(e) {
  if ($(e.target).closest(".scheme__wrapper .scheme__box, .scheme__item").length == 0) {
    $(".scheme__popup").hide();
  }
});
