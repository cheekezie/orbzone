import { AddCollectionComponent } from './../../helper/add-collection/add-collection.component';
import { ImagePreviewDioalgComponent } from './../../helper/image-preview-dioalg/image-preview-dioalg.component';
import { UtilService } from 'src/app/Services/util.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ApiService } from './../../Services/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  active_tab = "Home";
  notification = false;
  tabs = [
    "Home",
    "Discover",
    "Illustrations",
    "New"
  ]
  gallery = [];
  constructor(
    private imageService: ApiService,
    private util: UtilService,
    private matDialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.getGallery();
    setTimeout(() => {
      this.notification = true;
    }, 5000);
  }
  async getGallery(){
    let res:any = await this.imageService.getGallery();
    this.gallery = res.sort(() => Math.random() - 0.5)
  }
  changeTab(item){
    this.active_tab = item;
  }
  open(url: String): void {
    const dialogConfig = this.util.dialogConfig();
    dialogConfig.data = {
      image: url,
      author: {}
    }
    dialogConfig.width = '100%';
    this.matDialog.open(ImagePreviewDioalgComponent, dialogConfig);  
  }
  addCollection(url: String): void {
    const dialogConfig = this.util.dialogConfig();
    dialogConfig.data = {
      image: url,
      author: {}
    }
    dialogConfig.width = '38rem';
    this.matDialog.open(AddCollectionComponent, dialogConfig);  
  }
}
