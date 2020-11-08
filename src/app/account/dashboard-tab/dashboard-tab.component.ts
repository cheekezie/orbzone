import { MatSnackBar } from '@angular/material/snack-bar';
import { ApiService } from './../../Services/api.service';
import { UtilService } from 'src/app/Services/util.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-tab',
  templateUrl: './dashboard-tab.component.html',
  styleUrls: ['./dashboard-tab.component.scss']
})
export class DashboardTabComponent implements OnInit {
  @ViewChild('walletTab', { static: true }) walletTab: ElementRef<HTMLElement>;
  @ViewChild('uploadBtn', { static: true }) uploadBtn: ElementRef<HTMLElement>;
  isLinear = true;
  user:any;
  filter = {
    duration: 'month'
  };
  loader = false;
  analytics:any;
  options = [
    'day','week',
    'month','year','all'
  ];
  disclaimer = false;
  upload_dialog = false;
  constructor(
    private util: UtilService,
    private api: ApiService,
    private snackBar: MatSnackBar,
    private router: Router,
    private Activatedroute: ActivatedRoute
  ) { }

  ngOnInit(): void { 
    let event = this.Activatedroute.snapshot.queryParamMap.get('event');
    if(event && event == 'upload'){
      this.upload_dialog = true
    }
    
    this.user = this.util.getUserObject();
    this.util.prifleChange.subscribe(data=>{
      if(data){
        this.user = data;
      }
    })
    this.getAnalytics();
  }

  openWallet(){
    this.walletTab.nativeElement.click();
    document.querySelector('#wallet').scrollIntoView();
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
  addImage(){
    if(this.disclaimer == false){
      this.snackBar.open('Terms |', 'Agree to the terms/conditions to continue', {
        duration: 8000,
        verticalPosition: 'bottom',
        horizontalPosition: 'right',
        panelClass: ['black-snackbar'],
     });
    }
    else{
      this.router.navigate(['/user/photo/upload'])
    }
  }
}
