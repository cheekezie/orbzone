import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UtilService } from 'src/app/Services/util.service';
import { ApiService } from './../../Services/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loader = false;
  constructor(
    private formbuilder: FormBuilder,
    private router: Router,
    private api: ApiService,
    private util: UtilService
  ) { 
    this.loginForm = this.formbuilder.group({
      password : ['', Validators.required],
      phone : ['', Validators.required],
    });
  }

  ngOnInit(): void {
    
  }
  async login(){
    this.loader = true;
    this.api.login(this.loginForm.value).subscribe((res:any)=>{
      this.util.succesSnackbar('Login successful');
      this.util.setUserObject(res.data.user);
      this.util.setToken(res.data.token)
      this.router.navigate(['/user'])
    },err =>(
      this.loader = false
    ))
  }

}
