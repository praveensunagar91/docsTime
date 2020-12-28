import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule,FormsModule } from "@angular/forms";
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { routing } from './app.routing';
import { ListpracticeComponent } from './listpractice/listpractice.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { FaqComponent } from './faq/faq.component';
import { JoindocstimeComponent } from './joindocstime/joindocstime.component';
import { ContactusComponent } from './contactus/contactus.component';
import { TermsconditionsComponent } from './termsconditions/termsconditions.component';
import { PrivacypolicyComponent } from './privacypolicy/privacypolicy.component';
import { DoctorsprivacypolicyComponent } from './doctorsprivacypolicy/doctorsprivacypolicy.component';
import { BenefitsComponent } from './benefits/benefits.component';
import { FeaturesComponent } from './features/features.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MyscheduleComponent } from './dashboard/myschedule/myschedule.component';
import { ReferralsreceivedComponent } from './dashboard/referralsreceived/referralsreceived.component';
import { ReferralssentComponent } from './dashboard/referralssent/referralssent.component';
import { ProfileComponent } from './dashboard/profile/profile.component';
import { ChangepasswordComponent } from './dashboard/changepassword/changepassword.component';
import { NotificationComponent } from './dashboard/notification/notification.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListpracticeComponent,
    AboutusComponent,
    FaqComponent,
    JoindocstimeComponent,
    ContactusComponent,
    TermsconditionsComponent,
    PrivacypolicyComponent,
    DoctorsprivacypolicyComponent,
    BenefitsComponent,
    FeaturesComponent,
    DashboardComponent,
    MyscheduleComponent,
    ReferralsreceivedComponent,
    ReferralssentComponent,
    ProfileComponent,
    ChangepasswordComponent,
    NotificationComponent,



  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CarouselModule,
    BsDatepickerModule.forRoot(),
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
