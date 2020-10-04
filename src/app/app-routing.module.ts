import { AuthGuard } from './Guard/auth.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Core/home/home.component';
import { NotfoundComponent } from './Core/notfound/notfound.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
    data: { title: "Home | Orbzone" },
  },

  {
    path: '404', 
    component: NotfoundComponent, 
    data: {title: 'Not Found | Orbzone'}
  },

  {
    path: "user",
    canActivate: [AuthGuard],
    data: {
      title: "User Account | Orbzone",
    },
    loadChildren: () =>
      import("./account/account.module").then((m) => m.AccountModule),
  },
  {path: '**', redirectTo: '/404'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
