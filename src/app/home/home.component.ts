import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { LogindataService } from './logindata.service';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  logIn:FormGroup;
  register:FormGroup;
  search:FormGroup;

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,

    nav: false,
    // navText: ['<i class="ti-angle-left"></i>','<i class="ti-angle-right"></i>'],
    autoplay: false, //Set AutoPlay to 3 seconds
     dots: false,
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
  }

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

  constructor(private router:Router,private data:LogindataService,private fb:FormBuilder) { }

  ngOnInit(): void {
    this.logIn=this.fb.group({
      email:new FormControl(null),
      password:new FormControl(null)
    });
  }


  onLogin(){

       const doctorMobile=this.logIn.get('email').value;
       const doctorPassword=this.logIn.get('password').value;
       const languageID="1";
       const doctorDeviceID="token";
       const apiType="Android/Web";
       const apiVersion="1.0";

      // const formdata = new  FormData();
      // const fdata='[{"languageID":"1","doctorDeviceID":"token","apiType":"Android/Web","apiVersion":"1.0"}]';
      // formdata.append('json',fdata);

      console.log(doctorPassword,doctorMobile,languageID,doctorDeviceID,apiType,apiVersion);
      this.data.signIn(doctorPassword,doctorMobile,languageID,doctorDeviceID,apiType,apiVersion).subscribe(
        (data:any)=>{
          this.router.navigate(['/dashboard']);
        }
      //   ,error=>{
      //     console.log(error.message);
      //   }
       );

  }

}
