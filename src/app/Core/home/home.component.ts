import { Component, HostListener, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UtilService } from 'src/app/Services/util.service';
import { AddCollectionComponent } from './../../helper/add-collection/add-collection.component';
import { ImagePreviewDioalgComponent } from './../../helper/image-preview-dioalg/image-preview-dioalg.component';
import { ApiService } from './../../Services/api.service';
declare const window: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  active_tab = "Home";
  search_term = ""
  notification = false;
  show_search = true;
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
  //toggling baner search area on window scroll
  @HostListener("window:scroll", [])
  onWindowScroll() {
    const number = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (number < 350) {
      this.show_search = true;
    }else{
      this.show_search = false;
    }
  }
  async getGallery(){
    let res:any = await this.imageService.getGallery();
    this.gallery = res.sort(() => Math.random() - 0.5)
  }
  changeTab(item){
    this.active_tab = item;
  }
  keypress(){
    if(this.search_term.trim().length > 2){
      setTimeout(() => {
        this.search()
      }, 2000);
    }
  }
  enter(){
    this.search()
  }
  search(){
    this.util.searchRoute('/search',this.search_term.trim())
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
