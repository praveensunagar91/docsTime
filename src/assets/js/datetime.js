$(document).ready(function() {
  $(".owl-category").owlCarousel({
     dots: true,
    margin: 15,
    items : 2,
    responsive: {
    0:{
      items: 1
    },
    574:{
      items: 2
    },
    767:{
      items: 2
    },
    993:{
      items: 2
    }
  }

  });
});
