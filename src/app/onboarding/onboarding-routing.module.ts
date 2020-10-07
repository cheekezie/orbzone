import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from './login/login.component';

const routes: Routes = [
    {
        path: 'login', 
        component: LoginComponent, 
        data: {title: 'Account | Login | Orbzone'}
    },
    {
        path: 'join', 
        component: SignUpComponent, 
        data: {title: 'Account | Join | Orbzone'}
    },
    {
        path: 'forgot-password', 
        component: ForgotPasswordComponent, 
        data: {title: 'Account | Forgot Password | Orbzone'}
    },
    {
        path: 'reset-password', 
        component: ResetPasswordComponent, 
        data: {title: 'Account | Reset Password | Orbzone'}
    },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OnboardingRoutingModule {}
