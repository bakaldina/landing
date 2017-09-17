(function($D) {
  var $button1 = $D.querySelector(".button-1"),
    $container1 = $D.querySelector(".container-1"),
    $button2 = $D.querySelector(".button-2"),
    $container2 = $D.querySelector(".container-2"),
    $button3 = $D.querySelector(".button-3"),
    $container3 = $D.querySelector(".container-3");

  $button1.addEventListener("click", function() {
    $container1.classList.add("active");
    $container2.classList.remove("active");
    $container3.classList.remove("active");

    $button1.classList.add("active");
    $button2.classList.remove("active");
    $button3.classList.remove("active");
  });

  $button2.addEventListener("click", function() {
    $container1.classList.remove("active");
    $container2.classList.add("active");
    $container3.classList.remove("active");

    $button1.classList.remove("active");
    $button2.classList.add("active");
    $button3.classList.remove("active");
  });
  $button3.addEventListener("click", function() {
    $container1.classList.remove("active");
    $container2.classList.remove("active");
    $container3.classList.add("active");

    $button1.classList.remove("active");
    $button2.classList.remove("active");
    $button3.classList.add("active");
  });
})(document);

(function($Q) {
  var $button11 = $Q.querySelector(".button-1-mobile"),
    $container11 = $Q.querySelector(".container-1-mobile"),
    $button22 = $Q.querySelector(".button-2-mobile"),
    $container22 = $Q.querySelector(".container-2-mobile"),
    $button33 = $Q.querySelector(".button-3-mobile"),
    $container33 = $Q.querySelector(".container-3-mobile");

  $button11.addEventListener("click", function() {
    $container11.classList.add("active");
    $container22.classList.remove("active");
    $container33.classList.remove("active");

    $button11.classList.add("active");
    $button22.classList.remove("active");
    $button33.classList.remove("active");
  });

  $button22.addEventListener("click", function() {
    $container11.classList.remove("active");
    $container22.classList.add("active");
    $container33.classList.remove("active");

    $button11.classList.remove("active");
    $button22.classList.add("active");
    $button33.classList.remove("active");
  });
  $button33.addEventListener("click", function() {
    $container11.classList.remove("active");
    $container22.classList.remove("active");
    $container33.classList.add("active");

    $button11.classList.remove("active");
    $button22.classList.remove("active");
    $button33.classList.add("active");
  });
})(document);
