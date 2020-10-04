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
  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    this.url = this.router.url;
  }
  @HostListener("window:scroll", [])
  onWindowScroll() {
    const number = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (number > 50) {
      this.navViewPort = true;
    } else{
      this.navViewPort = false;
    }
  }
}
