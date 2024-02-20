import { UltraW40KUniverseModule } from './UltraW40K-Universe/ultra-w40k-universe.module';
import { GauntW40KUniverseModule } from './gaunt-w40k-universe/gaunt-w40k-universe.module';
import { ForeverWarUniverseModule } from './forever-war-universe/forever-war-universe.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { verifyTokenGuard } from '../../auth/guards/verify-token.guard';
import { CompleteUniverseComponent } from './complete-universe.component';

const routes: Routes = [
  {
    path: '', children: [
  {
    path: '',canActivate: [verifyTokenGuard], component: CompleteUniverseComponent,
  },
  {
    path: 'duneUniverse', canActivate: [verifyTokenGuard],loadChildren: () => import('../complete-universe/dune-universe/dune-universe.module').then(m => m.DuneUniverseModule),
  },
  {
    path: 'expanseUniverse', canActivate: [verifyTokenGuard],loadChildren: () => import('../complete-universe/expanse-universe/expanse-universe.module').then(m => m.ExpanseUniverseModule),
  },
  {
    path: 'forEverWarUniverse', canActivate: [verifyTokenGuard],loadChildren: () => import('../complete-universe/forever-war-universe/forever-war-universe.module').then(m => m.ForeverWarUniverseModule),
  },
  {
    path: 'fundacionUniverse', canActivate: [verifyTokenGuard],loadChildren: () => import('../complete-universe/fundacion-universe/fundacion-universe.module').then(m => m.FundacionUniverseModule),
  },
  {
    path: 'galacticCenterUniverse', canActivate: [verifyTokenGuard],loadChildren: () => import('../complete-universe/galactic-center-universe/galactic-center-universe.module').then(m => m.GalacticCenterUniverseModule),
  },
  {
    path: 'gauntW40KUniverse', canActivate: [verifyTokenGuard],loadChildren: () => import('../complete-universe/gaunt-w40k-universe/gaunt-w40k-universe.module').then(m => m.GauntW40KUniverseModule),
  },
  {
    path: 'honoverseUniverse', canActivate: [verifyTokenGuard],loadChildren: () => import('../complete-universe/honorverse-universe/honorverse-universe.module').then(m => m.HonorverseUniverseModule),
  },
  {
    path: 'oldManWarUniverse', canActivate: [verifyTokenGuard],loadChildren: () => import('../complete-universe/old-man-war-universe/old-man-war-universe.module').then(m => m.OldManWarUniverseModule),
  },
  {
    path: 'seafordUniverse', canActivate: [verifyTokenGuard],loadChildren: () => import('../complete-universe/seaford-universe/seaford-universe.module').then(m => m.SeafordUniverseModule),
  },
  {
    path: 'ultraW40KUniverse', canActivate: [verifyTokenGuard],loadChildren: () => import('../complete-universe/UltraW40K-Universe/ultra-w40k-universe.module').then(m => m.UltraW40KUniverseModule),
  },
  {
    path: 'upliftUniverse', canActivate: [verifyTokenGuard],loadChildren: () => import('../complete-universe/uplift-universe/uplift-universe.module').then(m => m.UpliftUniverseModule),
  },
  {
    path: '**', redirectTo: 'library', pathMatch: 'full',
  }
]
}
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompleteUniverseRoutingModule { }
