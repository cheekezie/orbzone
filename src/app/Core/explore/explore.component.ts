import { ApiService } from './../../Services/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.scss']
})
export class ExploreComponent implements OnInit {
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
