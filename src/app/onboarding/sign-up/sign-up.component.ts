import { UtilService } from 'src/app/Services/util.service';
import { ApiService } from './../../Services/api.service';
import { Router } from '@angular/router';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  signupForm: FormGroup;
  loader = false;
  phone_valid = 0;
  constructor(
    private formbuilder: FormBuilder,
    private router: Router,
    private api: ApiService,
    private util: UtilService,
  ) {
    this.signupForm = this.formbuilder.group({
      password : ['', [Validators.required, Validators.minLength(7)]],
      firstname : ['', Validators.required],
      email : ['', [Validators.required, Validators.email]],
      vpwd : ['', Validators.required],
      surname : ['', Validators.required],
      phone: ['', [Validators.required, Validators.minLength(11)]],
    },{validator: this.matchingfield('password','vpwd')});
  }

  ngOnInit() {
  }
  regValid(control){
    return this.signupForm.controls[control].touched &&
    this.signupForm.controls[control].invalid;
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

  async join(){
    this.loader = true;
    let formData = new FormData();
    formData.append('surname', this.signupForm.value.surname);
    formData.append('firstname', this.signupForm.value.firstname);
    formData.append('phone', this.signupForm.value.phone);
    formData.append('email', this.signupForm.value.email);
    formData.append('password', this.signupForm.value.password);
    this.api.signup(formData).subscribe((res:any)=>{
      this.util.succesSnackbar('Sign Up successful');
      this.util.setUserObject(res.data);
      //this.router.navigate(['/user'])
    },err =>(
      this.loader = false
    ))
  }

  //making sure phone number field contains only numbers
  validatePhone(num){
    let regex =  /^\d+$/;
    let val = this.signupForm.value.phone.trim();
    if(regex.test(val)){
      this.phone_valid = 1;
    }
    if(!regex.test(val)){
      this.phone_valid = 2;
    }
  }

}

