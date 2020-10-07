import { HelperRoutingModule } from './helper-routing.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { FooterComponent } from './footer/footer.component';
import { ImagePreviewDioalgComponent } from './image-preview-dioalg/image-preview-dioalg.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AltNavbarComponent } from './alt-navbar/alt-navbar.component';
import { AddCollectionComponent } from './add-collection/add-collection.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    NavbarComponent, 
    FooterComponent, 
    ImagePreviewDioalgComponent, 
    AltNavbarComponent, 
    AddCollectionComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    HelperRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule
  ],
  exports: [
    NavbarComponent, 
    FooterComponent,
    AltNavbarComponent
  ]
})
export class HelperModule { }
