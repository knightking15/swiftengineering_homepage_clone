AOS.init();

// You can also pass an optional settings object
// below listed default settings
AOS.init({

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 400, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});

//Array of image URLs
// hero images slideshow

  $(document).ready(function() {
    let images = [
    './Images/car-1 herosec.jpg', 
    './Images/car-2 herosec.jpg', 
    './Images/car-3 herosec.jpg',
    './Images/car-4 herosec.jpg',
    './Images/car-5 herosec.jpg'];

    let currentIndex = 0;
    let imgElement = $('#hero-image');

    function changeImage() {
      imgElement.fadeOut(function() {
        imgElement.attr('src', images[currentIndex]);
        imgElement.fadeIn();
      });

      currentIndex++;
      if (currentIndex >= images.length) {
        currentIndex = 0;
      }
    }

    setInterval(changeImage, 3000); // Change image every 3 seconds
  });


  /**
   * customer slider
   * init owl
   */
  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    smartSpeed:450,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})
