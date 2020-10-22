import { UtilService } from 'src/app/Services/util.service';
import { ApiService } from './../../Services/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent implements OnInit {
  photos = [];
  params = {
    name: '',
    start: '',
    end: ''
  }
  loader = false;
  constructor(
    private api: ApiService,
    private util: UtilService
  ) { }

  ngOnInit(): void {
    this.getPhotos();
  }
  async getPhotos(){
    this.loader = true;
    this.api.searchImage(this.params).subscribe((res:any)=>{
      this.photos = res.data.images.data;
      this.loader = false
    },err=>(
      this.loader = false
    ))
  }
  addCollection(item:Object){
    this.util.addCollection(item)
  }
  share(item:Object){
    this.util.share(item);
  }
}
