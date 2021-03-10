// document.addEventListener('DOMContentLoaded', function() {
//     var elems = document.querySelectorAll('.carousel');
//     var instances = M.Carousel.init(elems, options);
//   });

//   // Or with jQuery

//   $(document).ready(function(){
//     $('.carousel').carousel();
//   });
//   var instance = M.Carousel.getInstance(elem);

//   instance.next();
//   instance.next(3);

// instance.prev();
// instance.prev(3);

// instance.set();
// instance.set(3);
// instance.destroy();
// var instance = M.Carousel.init({
//     fullWidth: true
//   });

//   // Or with jQuery

//   $('.carousel.carousel-slider').carousel({
//     fullWidth: true
//   });
  // var instance = M.Carousel.init({
  //   fullWidth: true,
  //   indicators: true
  // });

  // // Or with jQuery

  // $('.carousel.carousel-slider').carousel({
  //   fullWidth: true,
  //   indicators: true
  // });
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
      