import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GalacticCenterUniverseComponent } from './galactic-center-universe.component';
import { verifyTokenGuard } from 'src/app/modules/auth/guards/verify-token.guard';

const routes: Routes = [
  {
    path: '', children: [
  {
    path: '',canActivate: [verifyTokenGuard], component: GalacticCenterUniverseComponent
  },
  {
    path: 'books', canActivate: [verifyTokenGuard],loadChildren: () => import('../galactic-center-universe/galacticCentBooks/galacticCentrBooks.module').then(m => m.galacticCentBooksModule),
  },
  {
    path: 'characters', canActivate: [verifyTokenGuard],loadChildren: () => import('../galactic-center-universe/galacticCentCharacters/galacticCentCharacters.module').then(m => m.galacticCentCharactersModule),
  },
  {
    path: 'countries', canActivate: [verifyTokenGuard],loadChildren: () => import('../galactic-center-universe/galacticCentCountries/galacticCentCountries.module').then(m => m.galacticCentCountriesModule),
  },
  {
    path: 'planets', canActivate: [verifyTokenGuard],loadChildren: () => import('../galactic-center-universe/galacticCentPlanets/galacticCentPlanets.module').then(m => m.galacticCentPlanetsModule),
  },
  ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GalacticCenterUniverseRoutingModule { };
