import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { verifyTokenGuard } from 'src/app/modules/auth/guards/verify-token.guard';
import { ForeverWarUniverseComponent } from './forever-war-universe.component';

const routes: Routes = [
  {
    path: '', children: [
  {
    path: '',canActivate: [verifyTokenGuard], component: ForeverWarUniverseComponent
  },
  {
    path: 'books', canActivate: [verifyTokenGuard],loadChildren: () => import('../forever-war-universe/forEverWarBooks/forEverWarBooks.module').then(m => m.forEverWarBooksModule),
  },
  {
    path: 'characters', canActivate: [verifyTokenGuard],loadChildren: () => import('../forever-war-universe/forEverWarCharacters/forEverWarCharacters.module').then(m => m.forEverWarCharactersModule),
  },
  {
    path: 'countries', canActivate: [verifyTokenGuard],loadChildren: () => import('./forEverWarCountries/forEverWarCountries.module').then(m => m.forEverWarCountriesModule),
  },
  {
    path: 'planets', canActivate: [verifyTokenGuard],loadChildren: () => import('./forEverWarPlanets/forEverWarPlanets.module').then(m => m.forEverWarPlanetsModule),
  },
  ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ForeverWarUniverseRoutingModule { }
