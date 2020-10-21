import { UtilService } from 'src/app/Services/util.service';
import { ApiService } from './../../Services/api.service';
import { Router } from '@angular/router';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
  passwordForm: FormGroup;
  loader = false;
  phone_valid = 0;
  constructor(
    private formbuilder: FormBuilder,
    private router: Router,
    private api: ApiService,
    private util: UtilService,
  ) {
    this.passwordForm = this.formbuilder.group({
      new_password : ['', [Validators.required, Validators.minLength(6)]],
      code : ['', Validators.required],
      new_password_confirmation : ['', Validators.required],
      phone: [''],
    },{validator: this.matchingfield('new_password','new_password_confirmation')});
  }

  ngOnInit() {
  }
  regValid(control){
    return this.passwordForm.controls[control].touched &&
    this.passwordForm.controls[control].invalid;
  }

  // matching field verification for password
  matchingfield(field1,field2){
    return signupform =>{
      if(signupform.controls[field1].value !==
        signupform.controls[field2].value){
        return {mismatchedFields : true}
      }
    }
  }

  async reset(){
    this.loader = true;
    this.api.setNewPassword(this.passwordForm.value).subscribe((res:any)=>{
      this.util.succesSnackbar('Password Reset successful');
      this.util.setUserObject(res.data);
      //this.router.navigate(['/user'])
    },err =>(
      this.loader = false
    ))
  }

}
