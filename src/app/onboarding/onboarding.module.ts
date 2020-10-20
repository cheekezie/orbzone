import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from './../material/material.module';
import { BackgroundComponent } from './background/background.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { LoginComponent } from './login/login.component';
import { OnboardingRoutingModule } from './onboarding-routing.module';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { SignUpComponent } from './sign-up/sign-up.component';
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
    MaterialModule,
    OnboardingRoutingModule
  ]
})
export class OnboardingModule { }
