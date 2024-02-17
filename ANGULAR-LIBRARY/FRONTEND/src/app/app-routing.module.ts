import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { adminGuard } from './modules/auth/guards/admin.guard';
import { verifyTokenGuard } from './modules/auth/guards/verify-token.guard';

const routes: Routes = [

{
  path: 'auth', loadChildren: () => import('./modules/auth/auth.module').then(module => module.AuthModule)
},
{
  path: 'products', canActivate: [verifyTokenGuard], loadChildren: () => import('./modules/products/products.module').then(m => m.ProductsModule)
},
{
  path: 'admin', canActivate: [adminGuard], loadChildren: () => import('./modules/administrator/administrator.module').then(m => m.AdministratorModule)
},{
  path: '**', redirectTo: 'products', pathMatch: 'full'
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
