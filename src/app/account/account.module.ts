import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from './../material/material.module';
import { HelperModule } from './../helper/helper.module';
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
    ContributionsComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    HelperModule,
    AccountRoutingModule
  ]
})
export class AccountModule { }
