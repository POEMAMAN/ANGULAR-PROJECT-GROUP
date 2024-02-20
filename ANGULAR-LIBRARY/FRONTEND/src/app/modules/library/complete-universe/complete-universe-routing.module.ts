import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { verifyTokenGuard } from '../../auth/guards/verify-token.guard';
import { CompleteUniverseComponent } from './complete-universe.component';

const routes: Routes = [
  {
    path: '', children: [
  {
    path: 'completeUniverse', component: CompleteUniverseComponent
  },
  {
    path: 'duneUniverse', canActivate: [verifyTokenGuard],loadChildren: () => import('../complete-universe/dune-universe/dune-universe.module').then(m => m.DuneUniverseModule)
  },
  {
    path: '**', redirectTo: 'library', pathMatch: 'full'
  }
]
}
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompleteUniverseRoutingModule { }
