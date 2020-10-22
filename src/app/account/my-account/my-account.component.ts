import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UtilService } from 'src/app/Services/util.service';
import { ApiService } from './../../Services/api.service';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.scss']
})
export class MyAccountComponent implements OnInit {
  loader = false;
  profileForm: FormGroup;
  image_name = "";
  image;
  file : File;
  image_loader = false;
  image_change = false;
  constructor(
    private formbuilder: FormBuilder,
    private router: Router,
    private cdf : ChangeDetectorRef,
    private api: ApiService,
    private util: UtilService
  ) { 
    this.profileForm = this.formbuilder.group({
      surname : [''],
      firstname : [''],
      brand_name : [''],
      address : [''],
      email : [''],
      phone : [''],
      twitter : [''],
      instagram : [''],
      location : [''],
      portfolio : ['']
    });
  }

  ngOnInit(): void {
    let user = this.util.getUserObject();
    this.profileForm.controls['surname'].patchValue(user.surname);
    this.profileForm.controls['firstname'].patchValue(user.firstname);
    this.profileForm.controls['brand_name'].patchValue(user.surname);
    this.profileForm.controls['address'].patchValue(user.address);
    this.profileForm.controls['email'].patchValue(user.email);
    this.profileForm.controls['phone'].patchValue(user.phone);
    this.profileForm.controls['bio'].setValue(user.bio);
    this.profileForm.controls['twitter'].patchValue(user.twitter);
    this.profileForm.controls['instagram'].patchValue(user.instagram);
    this.profileForm.controls['portfolio'].patchValue(user.portfolio);
    this.profileForm.controls['location'].patchValue(user.location);
  }
  async updateImage(){
    this.loader = true;
    let formData = new FormData();
    formData.append('email', this.file);
    this.api.signup(formData).subscribe((res:any)=>{
      this.util.succesSnackbar(res.message);
      this.image_change = false;
      this.image_loader = false;
    },err =>(
      this.loader = false
    ))
  }
  onUploadProfile(event) {
    const file = (event.target as HTMLInputElement).files[0];
    //this.file = file;
    this.file = file;
    this.image_change = true;
    this.image_name = file.name;
    const files = event.srcElement.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      this.image = reader.result;
      this.cdf.detectChanges();
    };
    reader.readAsDataURL(files);
  }
}
