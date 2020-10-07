import { UtilService } from 'src/app/Services/util.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alt-navbar',
  templateUrl: './alt-navbar.component.html',
  styleUrls: ['./alt-navbar.component.scss']
})
export class AltNavbarComponent implements OnInit {
  search_term = "";
  constructor(
    private util: UtilService
  ) { }

  ngOnInit(): void {
  }
  menu(){
    let slide = document.getElementById('menu')
    slide.classList.toggle('motion_in')
  }
  search(){
    this.util.searchRoute('search',this.search_term.trim())
  }
}
