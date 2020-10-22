import { ApiService } from './../../Services/api.service';
import { UtilService } from 'src/app/Services/util.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contributions',
  templateUrl: './contributions.component.html',
  styleUrls: ['./contributions.component.scss']
})
export class ContributionsComponent implements OnInit {
  params = {
    name:'',
    end: '',
    start: '',
    status: ''
  }
  contributions = [];
  loader = false;
  constructor(
    private util: UtilService,
    private api: ApiService
  ) { }

  ngOnInit(): void {
    this.getContributions();
  }

  async getContributions(){
    this.loader = true;
    this.api.contributions(this.params).subscribe((res:any)=>{
      this.contributions = res.data.images.data;
      this.loader = false
    },err =>(
      this.loader = false
    ))
    
  }
}

