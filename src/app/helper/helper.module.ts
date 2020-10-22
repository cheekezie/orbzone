import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { AddCollectionComponent } from './add-collection/add-collection.component';
import { AltNavbarComponent } from './alt-navbar/alt-navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HelperRoutingModule } from './helper-routing.module';
import { ImagePreviewDioalgComponent } from './image-preview-dioalg/image-preview-dioalg.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ShareComponent } from './share/share.component';
import { ShimmerComponent } from './shimmer/shimmer.component';

@NgModule({
  declarations: [
    NavbarComponent, 
    FooterComponent, 
    ImagePreviewDioalgComponent, 
    AltNavbarComponent, 
    AddCollectionComponent,
    ShimmerComponent,
    ShareComponent
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
    AltNavbarComponent,
    ShimmerComponent
  ]
})
export class HelperModule { }
