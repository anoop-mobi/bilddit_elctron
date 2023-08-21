import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './shared/components';
import { LoginComponent } from './shared/components/login/login.component';
import { AdminComponent } from './admin/admin.component';
import { UserAuthGuard } from './core/services/auth/auth.guard';
import { ProductsComponent } from './products/products.component';



const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [UserAuthGuard],
    loadChildren: () =>
      import('./admin/admin.module').then(
        (m) => m.AdminModule
      ),

  },
  // {
  //   path: 'products',
  //   component: ProductsComponent,
  //   // canActivate: [UserAuthGuard],
  //   // loadChildren: () =>
  //   //   import('./admin/admin.module').then(
  //   //     (m) => m.AdminModule
  //   //   ),

  // },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {}),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
