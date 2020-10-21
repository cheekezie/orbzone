import { UtilService } from 'src/app/Services/util.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-tab',
  templateUrl: './dashboard-tab.component.html',
  styleUrls: ['./dashboard-tab.component.scss']
})
export class DashboardTabComponent implements OnInit {
  user:any
  constructor(
    private util: UtilService
  ) { }

  ngOnInit(): void {
    this.user = this.util.getUserObject();
    console.log(this.user);
    
  }

}
