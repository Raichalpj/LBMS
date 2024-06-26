import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { LoginComponent } from './login/login.component';
import { PublicRoutingModule } from './public-routing.module';
import { PublicComponent } from './public.component';
import { RegistrationComponent } from './registration/registration.component';
import { LandingpageComponent } from './LandingPage/landingpage.component';


@NgModule({
  declarations: [
    LoginComponent,
    ForgotPasswordComponent,
    PublicComponent,
    RegistrationComponent,
    LandingpageComponent
  
  ],
  imports: [
    PublicRoutingModule,
    SharedModule
  ]
})
export class PublicModule { }
