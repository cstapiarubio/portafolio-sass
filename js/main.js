/* fx nav color scroll*/
$(document).ready(function() {
$(window).scroll(function() {
        $('#nav').toggleClass('nav-trans', $(this).scrollTop() > $('#nav').height());
      });
});



/* fx carousel*/

// start carrousel

   $('.carousel.carousel-slider').carousel({
      fullWidth: true,
      indicators: false
   });


   // move next carousel
   $('.moveNextCarousel').click(function(e){
      e.preventDefault();
      e.stopPropagation();
      $('.carousel').carousel('next');
   });

   // move prev carousel
   $('.movePrevCarousel').click(function(e){
      e.preventDefault();
      e.stopPropagation();
      $('.carousel').carousel('prev');
   });



		
		