import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

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

  caseOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,

    nav: false,
    merge:true,
    autoplay: false, //Set AutoPlay to 3 seconds
     dots: false,
    items : 1,
    //itemsDesktop : [1199,6],
   // itemsDesktopSmall : [979,4]
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
  }


  constructor() { }

  ngOnInit(): void {

  }

}
