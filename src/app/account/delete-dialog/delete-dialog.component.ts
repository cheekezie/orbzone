import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiService } from 'src/app/Services/api.service';
import { UtilService } from 'src/app/Services/util.service';

@Component({
  selector: 'app-delete-dialog',
  templateUrl: './delete-dialog.component.html',
  styleUrls: ['./delete-dialog.component.scss']
})
export class DeleteDialogComponent implements OnInit {
  id = '';
  loader = false;
  constructor(
    private dialogRef: MatDialogRef<DeleteDialogComponent>,
    private api: ApiService,
    private util: UtilService,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }

  ngOnInit() {
    this.id = this.data.id;
  }
  async confirm(){
    try{
      this.loader = true
      let res:any;
      if(this.data.target == 'photo'){
       res = await this.api.deleteImage({imid:this.id});
      }
      if(this.data.target == 'card'){
        res = await this.api.deleteCard({cid:this.id});
      }
      this.util.succesSnackbar(res.message)
      this.dialogRef.close({event:'close', data:res})
      this.loader = false;
    }
    catch(err){
      this.loader = false;
    }
  }
  cancel() {
    this.dialogRef.close({event:'close', data:{res:'response'}})
  }
}
