import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GauntW40KUniverseComponent } from './gaunt-w40k-universe.component';
import { verifyTokenGuard } from 'src/app/modules/auth/guards/verify-token.guard';

const routes: Routes = [
  {
    path: '', children: [
  {
    path: '',canActivate: [verifyTokenGuard], component: GauntW40KUniverseComponent
  },
  {
    path: 'books', canActivate: [verifyTokenGuard],loadChildren: () => import('../gaunt-w40k-universe/gauntW40KBooks/gauntW40KBooks.module').then(m => m.gauntW40KBooksModule),
  },
  {
    path: 'characters', canActivate: [verifyTokenGuard],loadChildren: () => import('../gaunt-w40k-universe/gauntW40KCharacters/gauntW40KCharacters.module').then(m => m.gauntW40KCharactersModule),
  },
  {
    path: 'countries', canActivate: [verifyTokenGuard],loadChildren: () => import('../gaunt-w40k-universe/gauntW40KCountries/gauntW40KCountries.module').then(m => m.gauntW40KCountriesModule),
  },
  {
    path: 'planets', canActivate: [verifyTokenGuard],loadChildren: () => import('../gaunt-w40k-universe/gauntW40KPlanets/gauntW40KPlanets.module').then(m => m.gauntW40KPlanetsModule),
  },
  ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GauntW40KUniverseRoutingModule { };
