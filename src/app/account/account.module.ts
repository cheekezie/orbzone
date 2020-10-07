import { HelperModule } from './../helper/helper.module';
import { MatIconModule } from '@angular/material/icon';
import { AccountRoutingModule } from './account-routing.module';
import { CollectionsComponent } from './collections/collections.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    CollectionsComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    HelperModule,
    AccountRoutingModule
  ]
})
export class AccountModule { }
