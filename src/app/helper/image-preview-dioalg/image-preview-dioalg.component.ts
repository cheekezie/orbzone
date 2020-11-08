import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiService } from './../../Services/api.service';

@Component({
  selector: 'app-image-preview-dioalg',
  templateUrl: './image-preview-dioalg.component.html',
  styleUrls: ['./image-preview-dioalg.component.scss']
})
export class ImagePreviewDioalgComponent implements OnInit {
  gallery = [];
  shimmer = false;
  tags = [
    "Asian", "Background", "Bowl", "Chinese", "Cuisine"
  ]
  params = {
    tag: ''
  }
  constructor(
    private dialogRef: MatDialogRef<ImagePreviewDioalgComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private api: ApiService,
  ) { }

  ngOnInit(): void {
    this.params = this.data.tags
    this.relatedImages();
  }

  async relatedImages(){
    this.shimmer = true;
    this.api.relatedImages(this.params).subscribe((res:any)=>{
      this.gallery = res.data.images.data.slice(0,12).sort(() => Math.random() - 0.5);
      this.shimmer = false
    })
  }

  open(item){
    this.data = item;
  }

}
