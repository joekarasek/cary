(function ($, HelloWorldDevsTysonSteele) {
  // ======= Fixes =======
  HelloWorldDevsTysonSteele.noOrphans('h1,h2,h3,h4,h5,h6,li,p', '.allow-orphan');
  HelloWorldDevsTysonSteele.scrollToFix('#primary-menu');

  // ======= Request Appointment Form =======
  HelloWorldDevsTysonSteele.requestAppointment('#mail-form', '#success_msg', '7fb35345-752d-4792-9480-cd3db6674a62');

  // ======= Carousels =======
  HelloWorldDevsTysonSteele.marqueeCarousel({
    autoplay: 6000,
    effect: 'fade',
    speed: 500,
    loop: true,
  });

  HelloWorldDevsTysonSteele.tourCarousel('.js-tour-carousel', {
    items: 1,
    margin: 40,
    navText: [
      '<i class="icon-chevron-left"></i>',
      '<i class="icon-chevron-right"></i>',
    ],
    responsive: {
      768: {
        items: 2,
      },
    },
  });

  HelloWorldDevsTysonSteele.associationCarousel('.js-associations-carousel', {
    items: 2,
    loop: true,
    autoplay: true,
    autoplaySpeed: 500,
    autoplayTimeout: 2000,
    autoplayHoverPause: false,
    autoWidth: false,
    nav: false,
    dots: false,
    margin: 40,
    slideBy: 1,
    responsive: {
      550: {
        items: 3,
      },
      992: {
        items: 4,
      },
    },
  });

  HelloWorldDevsTysonSteele.pyramidCarousel('.js-services-carousel--one', {
    items: 1,
    loop: true,
    autoplay: true,
    autoplaySpeed: 500,
    autoplayTimeout: 5000,
    autoplayHoverPause: false,
    autoWidth: false,
    navText: [
      '<img src="assets/left-arrow.png">',
      '<img src="assets/right-arrow.png">',
    ],
    nav: true,
    dots: false,
    margin: 40,
    slideBy: 1,
    responsive: {
      550: {
        items: 1,
      },
    },
  });

  HelloWorldDevsTysonSteele.pyramidCarousel('.js-team-carousel', {
    items: 2,
    navText: [
      '<img src="assets/team-arrow-left.png">',
      '<img src="assets/team-arrow-right.png">',
    ],
    responsive: {
      480: {
        items: 3,
      },
    },
    margin: 10,
  });

  HelloWorldDevsTysonSteele.pyramidCarousel('.js-smiles-carousel', {
    items: 1,
    navText: [
      '<img src="assets/left-arrow.png">',
      '<img src="assets/right-arrow.png">',
    ],
    responsive: {
      550: {
        items: 2,
      },
      992: {
        items: 3,
      },
    },
    margin: 60,
  });

  HelloWorldDevsTysonSteele.updateCopyright('.js-copyright-year');

  // ======= Google Maps =======
  HelloWorldDevsTysonSteele.googleMap('#google-map5', '45.373961,-122.841571', '45.373961,-122.841571');
  HelloWorldDevsTysonSteele.googleMap('#google-map-two', '45.263826,-122.699572', '45.263826,-122.699572');

}($, HelloWorldDevsTysonSteele));
