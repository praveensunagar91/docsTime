$(document).ready(function() {

  $(".owl-category").owlCarousel({
     nav: true,
    navText: ['<i class="ti-angle-left"></i>','<i class="ti-angle-right"></i>'],
    autoPlay: 3000, //Set AutoPlay to 3 seconds
     dots: true,
    items : 6,
    //itemsDesktop : [1199,6],
   // itemsDesktopSmall : [979,4]
    responsive: {
    0:{
      items: 2
    },
    574:{
      items: 3
    },
    767:{
      items: 4
    },
    993:{
      items: 6
    }
  }

  });

});
