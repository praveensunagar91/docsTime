import { Routes,RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { ListpracticeComponent } from "./listpractice/listpractice.component";
import { AboutusComponent } from "./aboutus/aboutus.component";
import { FaqComponent } from "./faq/faq.component";
import { JoindocstimeComponent } from "./joindocstime/joindocstime.component";
import { ContactusComponent } from "./contactus/contactus.component";
import { TermsconditionsComponent } from "./termsconditions/termsconditions.component";
import { DoctorsprivacypolicyComponent } from "./doctorsprivacypolicy/doctorsprivacypolicy.component";
import { PrivacypolicyComponent } from "./privacypolicy/privacypolicy.component";
import { BenefitsComponent } from "./benefits/benefits.component";
import { FeaturesComponent } from "./features/features.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { MyscheduleComponent } from "./dashboard/myschedule/myschedule.component";
import { ReferralsreceivedComponent } from "./dashboard/referralsreceived/referralsreceived.component";
import { ReferralssentComponent } from "./dashboard/referralssent/referralssent.component";
import { ProfileComponent } from "./dashboard/profile/profile.component";
import { ChangepasswordComponent } from "./dashboard/changepassword/changepassword.component";
import { NotificationComponent } from "./dashboard/notification/notification.component";



const arr:Routes=[
{path:'',component:HomeComponent},
{path:'listPractice',component:ListpracticeComponent},
{path:'aboutUs',component:AboutusComponent},
{path:'faq',component:FaqComponent},
{path:'joinDocsTime',component:JoindocstimeComponent},
{path:'contactUs',component:ContactusComponent},
{path:'termsConditions',component:TermsconditionsComponent},
{path:'privacyPolicy',component:PrivacypolicyComponent},
{path:'doctorsPrivacyPolicy',component:DoctorsprivacypolicyComponent},
{path:'benefits',component:BenefitsComponent},
{path:'features',component:FeaturesComponent},
{path:'dashboard',component:DashboardComponent},
{path:'mySchedule',component:MyscheduleComponent},
{path:'referralsReceived',component:ReferralsreceivedComponent},
{path:'referralsSent',component:ReferralssentComponent},
{path:'profile',component:ProfileComponent},
{path:'changePassword',component:ChangepasswordComponent},
{path:'notificationSettings',component:NotificationComponent},


];

export const routing=RouterModule.forRoot(arr);
