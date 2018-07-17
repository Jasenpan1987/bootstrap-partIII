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

  $(".gallary-list-item").click(function() {
    let val = $(this).attr("data-filter");

    $(this)
      .addClass("active-item")
      .siblings()
      .removeClass("active-item");

    if (val === "all") {
      $(".filter").show(500);
    } else {
      $(".filter")
        .not(`.${val}`)
        .hide(500);
      $(".filter")
        .filter(`.${val}`)
        .show(500);
    }
  });

  $(window).scroll(function() {
    let position = $(this).scrollTop();
    if (position >= 4487) {
      [$(".card-1"), $(".card-2"), $(".card-3")].forEach(card =>
        card.addClass("animateCard")
      );
    } else {
      [$(".card-1"), $(".card-2"), $(".card-3")].forEach(card =>
        card.removeClass("animateCard")
      );
    }
  });
});
