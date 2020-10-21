import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CollectionsComponent } from './collections/collections.component';
import { DashboardTabComponent } from './dashboard-tab/dashboard-tab.component';
import { EditPhotoComponent } from './edit-photo/edit-photo.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardTabComponent, 
    data: {title: 'User | Dashboard | Orbzone'},
  },
  {
    path: 'edit-photo/:id',
    component: EditPhotoComponent,
    data: {title: 'User | My Collections | Orbzone'}
  },
  {
    path: 'collections',
    component: CollectionsComponent,
    data: {title: 'User | My Collections | Orbzone'}
  },

];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccountRoutingModule {}
