import { ApiService } from './../../Services/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-background',
  templateUrl: './background.component.html',
  styleUrls: ['./background.component.scss']
})
export class BackgroundComponent implements OnInit {
  gallery = [];
  constructor(
    private imageService: ApiService
  ) { }

  ngOnInit(): void {
    this.getGallery();
  }
  async getGallery(){
    let res:any = await this.imageService.getGallery();
    this.gallery = res.slice(0,10).sort(() => Math.random() - 0.5)
  }

}
