import { ApiService } from './../../Services/api.service';
import { UtilService } from 'src/app/Services/util.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-tab',
  templateUrl: './dashboard-tab.component.html',
  styleUrls: ['./dashboard-tab.component.scss']
})
export class DashboardTabComponent implements OnInit {
  user:any;
  filter = {
    duration: ''
  };
  loader = false;
  analytics:any;
  options = [
    'day','week',
    'month','year','all'
  ]
  constructor(
    private util: UtilService,
    private api: ApiService
  ) { }

  ngOnInit(): void {
    this.user = this.util.getUserObject();
    this.getAnalytics();
  }
  filterAnalytics(val){
    this.filter.duration = val;
    this.getAnalytics();
  }
  async getAnalytics(){
    this.loader = true;
    this.api.dashboard(this.filter).subscribe((res:any)=>{
      this.analytics = res.data;
      this.loader = false
    },err =>(
      this.loader = false
    ))
    
  }
}
