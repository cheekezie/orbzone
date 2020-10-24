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
  passwordForm: FormGroup;
  cardForm: FormGroup;
  image_name = "";
  image;
  file : File;
  cards = [];
  image_loader = false;
  image_change = false; 
  card_loader  = false;
  resolved = false;
  add_card = false;
  password_loader = false;
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
      portfolio : [''],
      bio : [''],
      dob : [''],
      gender : ['']
    }); 

    this.passwordForm = this.formbuilder.group({
      current_password : ['' ,Validators.required],
      new_password : ['', [Validators.required, Validators.minLength(8)]],
      vpwd : ['', [Validators.required, Validators.minLength(8)]],
    },{validator: this.matchingfield('new_password','vpwd')});

    this.cardForm = this.formbuilder.group({
      number : ['' ,Validators.required],
      expiry : ['', Validators.required],
      cvv : ['', Validators.required],
    });
  }

  ngOnInit(): void {
    let user = this.util.getUserObject();
    this.getProfile()
    this.image = user.image;
    this.profileForm.controls['surname'].patchValue(user.surname);
    this.profileForm.controls['firstname'].patchValue(user.firstname);
    this.profileForm.controls['brand_name'].patchValue(user.brand_name || '');
    this.profileForm.controls['address'].patchValue(user.address || '');
    this.profileForm.controls['email'].patchValue(user.email || '');
    this.profileForm.controls['phone'].patchValue(user.phone || '');
    this.profileForm.controls['bio'].setValue(user.bio || '');
    this.profileForm.controls['twitter'].patchValue(user.twitter || '');
    this.profileForm.controls['instagram'].patchValue(user.instagram || '');
    this.profileForm.controls['portfolio'].patchValue(user.portfolio || '');
    this.profileForm.controls['location'].patchValue(user.location || '');
    this.profileForm.controls['dob'].patchValue(this.revertDOB(user.dob));
    this.profileForm.controls['gender'].patchValue(user.gender || '');
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
  async updateImage(){
    this.image_loader = true;
    let formData = new FormData();
    formData.append('image', this.file);
    this.api.updateImage(formData).subscribe((res:any)=>{
      this.util.succesSnackbar(res.message);
      this.getProfile();
      this.image_change = false;
      this.image_loader = false;
    },err =>(
      this.loader = false
    ))
  }
  //FORMATTING DATE TO YY-MM-DD
  formateDate(){
    if(this.profileForm.value.dob !== ''){
    return new Date(this.profileForm.value.dob).toJSON().slice(0,10).split('-').reverse().join('-');
    }
    return ''
  }
  revertDOB(dob:any){
    if(dob){
      return new Date(dob.split('-').reverse().join('/'))
    }
    return ''
  }
  async updateProfile(){
    this.loader = true;
    this.profileForm.value.dob = this.formateDate();
    this.api.updateProfile(this.profileForm.value).subscribe((res:any)=>{
      this.util.succesSnackbar(res.message);
      this.getProfile();
      this.loader = false;
    },err =>(
      this.loader = false
    ))
  }
  async updatePassword(){
    this.password_loader = true;
    this.api.updatePassword(this.passwordForm.value).subscribe((res:any)=>{
      this.util.succesSnackbar(res.message);
      this.passwordForm.reset();
      this.password_loader = false;
    },err =>(
      this.password_loader = false
    ))
  }
  async getProfile(){
    this.api.profile().subscribe((res:any)=>{
      this.util.setUserObject(res.data.user);
      this.cards = res.data.cards;
      this.util.setProfileChange(res.data.user);
    })
  }
  addCard(){

  }
  resolveCard(){

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
