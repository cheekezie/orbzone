import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wallets',
  templateUrl: './wallets.component.html',
  styleUrls: ['./wallets.component.scss']
})
export class WalletsComponent implements OnInit {
  history = [];
  accounts = [];
  add_account = false;
  loader = false;
  accountLoader = false;
  constructor() { }

  ngOnInit(): void {
  }

}
