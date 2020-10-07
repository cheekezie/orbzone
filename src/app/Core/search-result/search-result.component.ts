import { ApiService } from './../../Services/api.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent implements OnInit {
  gallery = [];
  search_term = "";
  constructor(
    private imageService: ApiService,
    private Activatedroute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.search_term = this.Activatedroute.snapshot.queryParamMap.get('tag');
    this.getGallery();
  }
  async getGallery(){
    let res:any = await this.imageService.getGallery();
    this.gallery = res.sort(() => Math.random() - 0.5)
  }

}

