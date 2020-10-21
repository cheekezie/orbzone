import { ContributionsComponent } from './contributions/contributions.component';
import { MyAccountComponent } from './my-account/my-account.component';
import { EditPhotoComponent } from './edit-photo/edit-photo.component';
import { PhotosComponent } from './photos/photos.component';
import { WalletsComponent } from './wallets/wallets.component';
import { DeleteDialogComponent } from './delete-dialog/delete-dialog.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardTabComponent } from './dashboard-tab/dashboard-tab.component';
import { MyCollectionsComponent } from './my-collections/my-collections.component';
import { HelperModule } from './../helper/helper.module';
import { MatIconModule } from '@angular/material/icon';
import { AccountRoutingModule } from './account-routing.module';
import { CollectionsComponent } from './collections/collections.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

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
    MatIconModule,
    HelperModule,
    AccountRoutingModule
  ]
})
export class AccountModule { }
