import { ApiService } from './../../Services/api.service';
import { Router } from '@angular/router';
import { UtilService } from 'src/app/Services/util.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  sent = false;
  loader = false;
  resend_loader = false;
  confirm_loader = false;
  data = {
    phone: '',
    code: ''
  }
  constructor(
    private util: UtilService,
    private router: Router,
    private api: ApiService
  ) { }

  ngOnInit(): void {
  }
  confirm(){
    this.confirm_loader = true;
    this.api.confirmCode(this.data).subscribe((res:any)=>{
      this.util.succesSnackbar('Confirmation code confirmed')
      this.router.navigate(['/account/reset-password'], {
        queryParams: {
          auth_id: res.data.phone,
          auth_code: res.data.code
        },
      });
    },err =>(
      this.confirm_loader = false
    ))
  }
  resend(){
    this.resend_loader = true;
    this.api.resendCode().subscribe((res:any)=>{
      this.sent = true;
      this.util.succesSnackbar('Confirmation code sent')
      this.resend_loader = false;
    },err =>(
      this.resend_loader = false
    ))
  }
  send(){
    this.loader = true;
    let formdata = new FormData;
    formdata.append('phone', this.data.phone);
    this.api.resetPassword(formdata).subscribe((res:any)=>{
      this.sent = true;
      this.util.succesSnackbar('Confirmation code sent');
      //this.util.setUserObject(res.data)
      this.loader = false;
    },err =>(
      this.loader = false
    ))
    
  }
}
