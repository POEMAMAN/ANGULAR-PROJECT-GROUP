import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { verifyTokenGuard } from 'src/app/modules/auth/guards/verify-token.guard';
import { CompleteUniverseComponent } from '../complete-universe.component';

const routes: Routes = [
  {
    path: '', children: [
  {
    path: '',canActivate: [verifyTokenGuard], component: CompleteUniverseComponent,
  },
  {
    path: 'books', canActivate: [verifyTokenGuard],loadChildren: () => import('../dune-universe/dune-universe.module').then(m => m.DuneUniverseModule),
  },
  // {
  //   path: 'characters', canActivate: [verifyTokenGuard],loadChildren: () => import('../complete-universe/expanse-universe/expanse-universe.module').then(m => m.ExpanseUniverseModule),
  // },
  // {
  //   path: 'countries', canActivate: [verifyTokenGuard],loadChildren: () => import('../complete-universe/forever-war-universe/forever-war-universe.module').then(m => m.ForeverWarUniverseModule),
  // },
  // {
  //   path: 'planets', canActivate: [verifyTokenGuard],loadChildren: () => import('../complete-universe/fundacion-universe/fundacion-universe.module').then(m => m.FundacionUniverseModule),
  // },
  {
    path: '**', redirectTo: '', pathMatch: 'full',
  }
]
}
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DuneUniverseRoutingModule { }
