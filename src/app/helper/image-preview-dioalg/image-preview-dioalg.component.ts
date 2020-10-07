import { ApiService } from './../../Services/api.service';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-image-preview-dioalg',
  templateUrl: './image-preview-dioalg.component.html',
  styleUrls: ['./image-preview-dioalg.component.scss']
})
export class ImagePreviewDioalgComponent implements OnInit {
  gallery = [];
  tags = [
    "Asian", "Background", "Bowl", "Chinese", "Cuisine"
  ]
  constructor(
    private dialogRef: MatDialogRef<ImagePreviewDioalgComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private imageService: ApiService
  ) { }

  ngOnInit(): void {
    this.getGallery();
  }
  async getGallery(){
    let res:any = await this.imageService.getGallery();
    this.gallery = res.slice(0,12).sort(() => Math.random() - 0.5)
  }
  open(item){
    this.data.image = item;
  }

}
