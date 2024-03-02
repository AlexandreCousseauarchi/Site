(function () {
  "use strict";

  var carousels = function () {
    var owl = $(".owl-carousel1").owlCarousel({
      loop: true,
      center: true,
      margin: 0,
      responsiveClass: true,
      autoplay: true,
      autoplayTimeout: 3500,
      nav: false,
      responsive: {
        0: {
          items: 1,
          nav: false
        },
        680: {
          items: 2,
          nav: false,
          loop: false
        },
        1000: {
          items: 3,
          nav: true
        }
      }
    });

    var totalItems = owl.find('.owl-item').length;

    owl.on('changed.owl.carousel', function(event) {
      if (event.item.index + 1 === totalItems) {
        setTimeout(function(){
          owl.trigger('to.owl.carousel', 0);
        }, 3500); // Delayed restart
      }
    });
  };

  (function ($) {
    carousels();
  })(jQuery);
})();
