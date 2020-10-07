import { CollectionsComponent } from './collections/collections.component';
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
    {
        path: 'collections', 
        component: CollectionsComponent, 
        data: {title: 'My Collections | Orbzone'}
    },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccountRoutingModule {}
