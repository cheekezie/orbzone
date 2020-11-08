import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/Services/api.service';
import { UtilService } from 'src/app/Services/util.service';
import { DeleteDialogComponent } from '../delete-dialog/delete-dialog.component';

@Component({
  selector: 'app-upload-image',
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.scss']
})
export class UploadImageComponent implements OnInit {
  loader = false;
  data_loader = false;
  image_change = false;
  image_name = "";
  categories = [];
  imageForm = {
    title: '',
    type: 'photo',
    category: '',
    description: '',
    attributes: [
      {
        name: '',
        value: ''
      }
    ],
    tags: [
      {
        name: ''
      }
    ]
  }
  contributions = [];
  params = {
    name:'',
    end: '',
    start: '',
    status: ''
  }
  image;
  file;
  types = [
    "photo",'illustration',"video"
  ]
  constructor(
    private util: UtilService,
    private api: ApiService,
    private cdf: ChangeDetectorRef,
    private router: Router,
    private matDialog: MatDialog
  ) {

   }

  ngOnInit(): void {
    this.getContributions();
    this.getCategories();
  }
  async getContributions(){
    this.data_loader = true;
    this.api.myContributions(this.params).subscribe((res:any)=>{
      this.contributions = res.data.images.data;
      this.data_loader = false
    },err =>(
      this.data_loader = false
    ))
    
  }
  async getCategories(){
    this.data_loader = true;
    this.api.categories().subscribe((res:any)=>{
      this.categories = res.data.categories.data;
      this.data_loader = false
    },err =>(
      this.data_loader = false
    ))
    
  }
  
  cancel(){
    this.router.navigate(['/user'])
  }
  delete(id){
    const dialogConfig = this.util.dialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.width = '30rem';
    dialogConfig.data = {
      action:'Remove',
      title: 'Photo',
      id: id,
      target: 'photo'
    };
    let dialogRef = this.matDialog.open(DeleteDialogComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.getContributions();
      }   
    });
  }
  addTag(){
    this.imageForm.tags.push({name:''})
  }
  removeAttr(i){
    delete this.imageForm.attributes[i];
    this.imageForm.attributes = this.imageForm.attributes.filter(el=>{
      return el !== undefined
    })
  }
  removeTag(i){
    delete this.imageForm.tags[i];
    this.imageForm.tags = this.imageForm.tags.filter(el=>{
      return el !== undefined
    })
  }
  addAttribute(){
    this.imageForm.attributes.push({name:'',value:''})
  }
  validations(){
    if(this.imageForm.title == '' || this.imageForm.description == ''
    || this.imageForm.type == '' || this.imageForm.category == ''){
      this.util.warningSnackbar('Please enter the required fields to continue')
      return false;
    }
    let attr = this.imageForm.attributes.filter(el=>{
      return el.name == '' || el.value == ''
    })
    if(attr.length > 0){
      this.util.warningSnackbar('Please enter at least one name and a value for the image attributes')
      return false
    }
    let tags = this.imageForm.tags.filter(el=>{
      return el.name == ''
    })
    if(tags.length > 0){
      this.util.warningSnackbar('Please enter at least one image tag')
      return false
    }
    return true
  }
  async publish(){
    this.loader = true;
    let formData =  new FormData;
    let tags = []
    this.imageForm.tags.forEach(item=>{
      tags.push(item)
    })
    formData.append('title', this.imageForm.title);
    formData.append('type', this.imageForm.type);
    formData.append('category', this.imageForm.category);
    formData.append('image', this.file);
    formData.append('tags', JSON.stringify(tags));
    formData.append('attributes', JSON.stringify(this.imageForm.attributes));
    formData.append('description', this.imageForm.description);
    this.api.uploadImage(formData).subscribe((res:any)=>{
      this.util.succesSnackbar(res.message);
      this.getContributions();
      this.loader = false
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
