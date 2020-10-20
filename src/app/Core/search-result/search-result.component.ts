import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { UtilService } from 'src/app/Services/util.service';
import { AddCollectionComponent } from './../../helper/add-collection/add-collection.component';
import { ImagePreviewDioalgComponent } from './../../helper/image-preview-dioalg/image-preview-dioalg.component';
import { ApiService } from './../../Services/api.service';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent implements OnInit {
  gallery = [];
  search_term = "";
  shimmer = false;
  params = {
    name: '',
    start: '',
    end: ''
  }
  constructor(
    private matDialog: MatDialog,
    private util: UtilService,
    private router: Router,
    private api : ApiService,
    private Activatedroute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.searchmages();
    this.router.events.subscribe((val) => {
      if(val instanceof NavigationEnd == true){
        this.searchmages();
      }
    });
  }
  async searchmages(){
    this.shimmer = true;
    this.params.name = this.Activatedroute.snapshot.queryParamMap.get('tag');
    this.api.searchImage(this.params).subscribe((res:any)=>{
      this.gallery = res.data.images.data.sort(() => Math.random() - 0.5);
      this.shimmer = false
    },err =>(
      this.shimmer = false
    ))
    
  }

  open(item: Object): void {
    const dialogConfig = this.util.dialogConfig();
    dialogConfig.data = item;
    dialogConfig.width = '100%';
    this.matDialog.open(ImagePreviewDioalgComponent, dialogConfig);  
  }
  addCollection(data: Object): void {
    const dialogConfig = this.util.dialogConfig();
    dialogConfig.data = data;
    dialogConfig.disableClose = false;
    dialogConfig.width = '38rem';
    this.matDialog.open(AddCollectionComponent, dialogConfig);  
  }

}

