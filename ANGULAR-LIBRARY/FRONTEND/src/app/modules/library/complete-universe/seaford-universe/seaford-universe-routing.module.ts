import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { verifyTokenGuard } from 'src/app/modules/auth/guards/verify-token.guard';
import { SeafordUniverseComponent } from './seaford-universe.component';

const routes: Routes = [
  {
    path: '', children: [
  {
    path: '',canActivate: [verifyTokenGuard], component: SeafordUniverseComponent
  },
  {
    path: 'books', canActivate: [verifyTokenGuard],loadChildren: () => import('../seaford-universe/seafordBooks/seafordBooks.module').then(m => m.seafordBooksModule),
  },
  {
    path: 'characters', canActivate: [verifyTokenGuard],loadChildren: () => import('../seaford-universe/seafordCharacters/seafordCharacters.module').then(m => m.seafordCharactersModule),
  },
  {
    path: 'countries', canActivate: [verifyTokenGuard],loadChildren: () => import('../seaford-universe/seafordCountries/seafordCountries.module').then(m => m.seafordCountriesModule),
  },
  {
    path: 'planets', canActivate: [verifyTokenGuard],loadChildren: () => import('../seaford-universe/seafordPlanets/seafordPlanets.module').then(m => m.seafordPlanetsModule),
  },
  ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SeafordUniverseRoutingModule { }
