import { banks } from './../banks';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UtilService } from 'src/app/Services/util.service';
import { ApiService } from './../../Services/api.service';

@Component({
  selector: 'app-wallets',
  templateUrl: './wallets.component.html',
  styleUrls: ['./wallets.component.scss']
})
export class WalletsComponent implements OnInit {
  withdrawals = [];
  accounts = [];
  add_account = false;
  loader = false;
  banks = banks;
  accountLoader = false;
  resolved = false;
  deleteLoader = false;
  withdrawalLoader = false;
  account_data = {
    accountid: ""
  };
  profile : any;
  user : any;
  accountForm: FormGroup;
  withdrawalForm: FormGroup;
  constructor(
    private formbuilder: FormBuilder,
    private router: Router,
    private api: ApiService,
    private util: UtilService
  ) { 
    this.accountForm = this.formbuilder.group({
      account_number : ['', Validators.required],
      account_name : [''],
      bank : ['', Validators.required]
    });
    this.withdrawalForm = this.formbuilder.group({
      password : ['', Validators.required],
      phone : ['', Validators.required],
    });
  }
  ngOnInit(): void {
    this.getProfile();
  }
  async getProfile(){
    this.loader = true;
    this.api.profile().subscribe((res:any)=>{
      this.accounts = res.data.accounts;
      this.withdrawals = res.data.withdrawals.data;
      this.user = res.data.user;
      this.loader = false;
    },err=>(
      this.loader = false
    ))
  }
  async addAccount(){
    this.accountLoader = true;
    this.api.addAccount(this.accountForm.value).subscribe((res:any)=>{
      this.util.succesSnackbar(res.message);
      this.accountForm.reset();
      this.accountLoader = false;
      this.add_account = false;
      this.getProfile();
    },err=>(
      this.accountLoader = false
    ))
  }
  delete(id){
    this.account_data.accountid = id;
  }
  async deleteAccount(){
    this.deleteLoader = true;
    this.api.deleteAccount(this.account_data).subscribe((res:any)=>{
      this.util.succesSnackbar(res.message)
      this.deleteLoader = false
    },err=>(
      this.deleteLoader = false
    ))
  }
  async resolveAccount(){
    this.accountLoader = true;
    this.api.resolveAccount(this.accountForm.value).subscribe((res:any)=>{
      if(res.data.status == 'failed'){
        this.util.errorSnackbar(res.message);
      }
      else{
        this.util.succesSnackbar(res.message);
        this.accountForm.controls['account_name'].setValue(res.data.name);
        this.resolved = true;
      }
      this.accountLoader = false; 
    },err=>(
      this.accountLoader = false
    ))
  }
}
