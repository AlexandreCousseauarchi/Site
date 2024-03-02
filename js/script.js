(function ($) {
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

  // Appel de la fonction carousels lorsque le DOM est prêt
  $(document).ready(function() {
    // Charger Owl Carousel depuis CDN
    var owlScript = document.createElement('script');
    owlScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js';
    owlScript.onload = function() {
      // Charger les styles Owl Carousel depuis CDN
      var owlStylesheet = document.createElement('link');
      owlStylesheet.rel = 'stylesheet';
      owlStylesheet.href = 'https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css';
      
      // Appeler la fonction carousels après le chargement d'Owl Carousel
      $('head').append(owlStylesheet);
      carousels();
    };

    $('head').append(owlScript);
  });
})(jQuery);
