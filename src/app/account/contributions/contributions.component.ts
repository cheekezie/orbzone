import { ApiService } from './../../Services/api.service';
import { UtilService } from 'src/app/Services/util.service';
import { Component, OnInit } from '@angular/core';
import { DeleteDialogComponent } from '../delete-dialog/delete-dialog.component';
import { MatDialog } from '@angular/material/dialog';

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
    private api: ApiService,
    private matDialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.getContributions();
  }

  async getContributions(){
    this.loader = true;
    this.api.myContributions(this.params).subscribe((res:any)=>{
      this.contributions = res.data.images.data;
      this.loader = false
    },err =>(
      this.loader = false
    ))
    
  }

  delete(id){
    const dialogConfig = this.util.dialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.width = '30rem';
    dialogConfig.data = {
      action:'Remove',
      title: 'Photo',
      id: id,
      target: 'photo'
    };
    let dialogRef = this.matDialog.open(DeleteDialogComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.getContributions();
      }   
    });
  }
}

