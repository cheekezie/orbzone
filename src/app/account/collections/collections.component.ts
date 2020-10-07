import { ApiService } from './../../Services/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collections',
  templateUrl: './collections.component.html',
  styleUrls: ['./collections.component.scss']
})
export class CollectionsComponent implements OnInit {
  gallery = [];
  constructor(
    private imageService: ApiService
  ) { }

  ngOnInit(): void {
    this.getGallery();
  }
  async getGallery(){
    let res:any = await this.imageService.getGallery();
    this.gallery = res.sort(() => Math.random() - 0.5)
  }

}

