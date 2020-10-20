import { ApiService } from './../../Services/api.service';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-share',
  templateUrl: './share.component.html',
  styleUrls: ['./share.component.scss']
})
export class ShareComponent implements OnInit {

  constructor(
    private dialogRef: MatDialogRef<ShareComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private api: ApiService,
  ) { }

  ngOnInit(): void {
  }

}
