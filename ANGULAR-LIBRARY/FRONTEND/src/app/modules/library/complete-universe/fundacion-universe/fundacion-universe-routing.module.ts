import { FundacionUniverseComponent } from './fundacion-universe.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { verifyTokenGuard } from 'src/app/modules/auth/guards/verify-token.guard';

const routes: Routes = [
  {
    path: '', children: [
  {
    path: '',canActivate: [verifyTokenGuard], component: FundacionUniverseComponent
  },
  {
    path: 'books', canActivate: [verifyTokenGuard],loadChildren: () => import('../fundacion-universe/fundacionBooks/fundacionBooks.module').then(m => m.fundacionBooksModule),
  },
  {
    path: 'characters', canActivate: [verifyTokenGuard],loadChildren: () => import('../fundacion-universe/fundacionCharacters/fundacionCharacters.module').then(m => m.fundacionCharactersModule),
  },
  {
    path: 'countries', canActivate: [verifyTokenGuard],loadChildren: () => import('../fundacion-universe/fundacionCountries/fundacionCountries.module').then(m => m.fundacionCountriesModule),
  },
  {
    path: 'planets', canActivate: [verifyTokenGuard],loadChildren: () => import('../fundacion-universe/fundacionPlanets/fundacionPlanets.module').then(m => m.fundacionPlanetsModule),
  },
  ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FundacionUniverseRoutingModule { }
