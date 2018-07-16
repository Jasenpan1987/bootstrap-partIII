$(document).ready(function() {
  $(".nav-button").click(function() {
    $(".nav-button").toggleClass("change");
  });

  $(window).scroll(function() {
    let position = $(this).scrollTop();
    if (position >= 200) {
      $(".nav-menu").addClass("custom-navbar");
    } else {
      $(".nav-menu").removeClass("custom-navbar");
    }
  });

  $(window).scroll(function() {
    let position = $(this).scrollTop();
    if (position >= 700) {
      $(".camera-img").addClass("fromleft");
      $(".mission-text").addClass("fromright");
    } else {
      $(".camera-img").removeClass("fromleft");
      $(".mission-text").removeClass("fromright");
    }
  });
});
