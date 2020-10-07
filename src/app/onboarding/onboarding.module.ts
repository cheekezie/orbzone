import { MatIconModule } from '@angular/material/icon';
import { OnboardingRoutingModule } from './onboarding-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { BackgroundComponent } from './background/background.component';
import { TopNavComponent } from './top-nav/top-nav.component';



@NgModule({
  declarations: [
    LoginComponent, 
    SignUpComponent, 
    ForgotPasswordComponent, 
    ResetPasswordComponent, 
    BackgroundComponent, 
    TopNavComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    OnboardingRoutingModule
  ]
})
export class OnboardingModule { }
