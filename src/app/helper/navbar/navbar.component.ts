import { UtilService } from 'src/app/Services/util.service';
import { Router } from '@angular/router';
import { Component, HostListener, OnInit } from '@angular/core';
declare const window: any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  navViewPort = false;
  url = "";
  search_term = "";
  show_search = false;
  constructor(
    private router: Router,
    private util: UtilService
  ) { }

  ngOnInit(): void {
    this.url = this.router.url;
  }
  //adding condition style to navbar on scroll
  @HostListener("window:scroll", [])
  onWindowScroll() {
    const number = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (number > 50) {
      this.navViewPort = true;
    }
    if (number > 350) {
      this.show_search = true;
    }
    if (number < 350) {
      this.show_search = false;
    }
    if (number <= 50){
      this.navViewPort = false;
    }
  }
  menu(){
    let slide = document.getElementById('menu')
    slide.classList.toggle('motion_in')
  }
  search(){
    this.util.searchRoute('search',this.search_term.trim())
  }
}

