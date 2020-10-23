import { UtilService } from 'src/app/Services/util.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alt-navbar',
  templateUrl: './alt-navbar.component.html',
  styleUrls: ['./alt-navbar.component.scss']
})
export class AltNavbarComponent implements OnInit {
  search_term = "";
  logged_In : boolean ;
  user:any;
  constructor(
    private util: UtilService
  ) { }

  ngOnInit(): void {
    this.checkLogin();
    this.util.prifleChange.subscribe(data=>{
      if(data){
        this.user = data;
      }
    })
  }
  checkLogin(){
    if(this.util.isLoggedIn()){
      this.user = this.util.getUserObject();
      this.logged_In = true;
      return
    }
    this.logged_In = false
  }
  menu(){
    let slide = document.getElementById('menu')
    slide.classList.toggle('motion_in')
  }
  search(){
    this.util.searchRoute('search',this.search_term.trim())
  }
}
