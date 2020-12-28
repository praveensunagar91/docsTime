import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.css']
})
export class FeaturesComponent implements OnInit {

  footerOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,

    nav: false,
    merge:true,
    autoplay: true, //Set AutoPlay to 3 seconds
     dots: true,
    items : 1,
    //itemsDesktop : [1199,6],
   // itemsDesktopSmall : [979,4]
    responsive: {
    0:{
      items: 1
    },
    574:{
      items: 1
    },
    767:{
      items: 1
    },
    993:{
      items: 1
    }
  }
  }


  constructor() { }

  ngOnInit(): void {
  }

}
