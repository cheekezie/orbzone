import { Component, HostListener, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { UtilService } from 'src/app/Services/util.service';
import { AddCollectionComponent } from './../../helper/add-collection/add-collection.component';
import { ImagePreviewDioalgComponent } from './../../helper/image-preview-dioalg/image-preview-dioalg.component';
import { ApiService } from './../../Services/api.service';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.scss']
})
export class ExploreComponent implements OnInit {
  gallery = [];
  shimmer = false;
  params = {
    name: '',
    start: '',
    end: ''
  }
  constructor(
    private matDialog: MatDialog,
    private util: UtilService,
    private api : ApiService,
    private Activatedroute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getImages();
  }
  async getImages(){
    this.shimmer = true;
    this.api.searchImage(this.params).subscribe((res:any)=>{
      this.gallery = res.data.images.data.sort(() => Math.random() - 0.5);
      this.shimmer = false
    })
  }

  open(item: Object): void {
    this.util.open(item)
  }
  addCollection(item:Object){
    this.util.addCollection(item)
  }
  share(item:Object){
    this.util.share(item);
  }

}

