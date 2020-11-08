import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HelperModule } from './../helper/helper.module';
import { MaterialModule } from './../material/material.module';
import { AccountRoutingModule } from './account-routing.module';
import { CollectionsComponent } from './collections/collections.component';
import { ContributionsComponent } from './contributions/contributions.component';
import { DashboardTabComponent } from './dashboard-tab/dashboard-tab.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DeleteDialogComponent } from './delete-dialog/delete-dialog.component';
import { EditPhotoComponent } from './edit-photo/edit-photo.component';
import { MyAccountComponent } from './my-account/my-account.component';
import { MyCollectionsComponent } from './my-collections/my-collections.component';
import { PhotosComponent } from './photos/photos.component';
import { WalletsComponent } from './wallets/wallets.component';
import { UploadImageComponent } from './upload-image/upload-image.component';

@NgModule({
  declarations: [
    CollectionsComponent,
    MyCollectionsComponent,
    DashboardTabComponent,
    DashboardComponent,
    DeleteDialogComponent,
    WalletsComponent,
    PhotosComponent,
    EditPhotoComponent,
    MyAccountComponent,
    ContributionsComponent,
    UploadImageComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HelperModule,
    AccountRoutingModule
  ]
})
export class AccountModule { }
