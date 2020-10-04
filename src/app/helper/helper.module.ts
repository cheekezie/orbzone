import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { FooterComponent } from './footer/footer.component';
import { ImagePreviewDioalgComponent } from './image-preview-dioalg/image-preview-dioalg.component';
import { NavbarComponent } from './navbar/navbar.component';


@NgModule({
  declarations: [
    NavbarComponent, 
    FooterComponent, 
    ImagePreviewDioalgComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    MatIconModule
  ],
  exports: [
    NavbarComponent, 
    FooterComponent,
  ]
})
export class HelperModule { }
