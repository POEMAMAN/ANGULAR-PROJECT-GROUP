import { HonorverseUniverseComponent } from './honorverse-universe.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { verifyTokenGuard } from 'src/app/modules/auth/guards/verify-token.guard';

const routes: Routes = [
  {
    path: '', children: [
  {
    path: '',canActivate: [verifyTokenGuard], component: HonorverseUniverseComponent
  },
  {
    path: 'books', canActivate: [verifyTokenGuard],loadChildren: () => import('../honorverse-universe/honorverseBooks/honorverseBooks.module').then(m => m.honorverseBooksModule),
  },
  {
    path: 'characters', canActivate: [verifyTokenGuard],loadChildren: () => import('../honorverse-universe/honorverseCharacters/honorverseCharacters.module').then(m => m.honorverseCharactersModule),
  },
  {
    path: 'countries', canActivate: [verifyTokenGuard],loadChildren: () => import('../honorverse-universe/honorverseCountries/honorverseCountries.module').then(m => m.honorverseCountriesModule),
  },
  {
    path: 'planets', canActivate: [verifyTokenGuard],loadChildren: () => import('../honorverse-universe/honorversePlanets/honorversePlanets.module').then(m => m.honorversePlanetsModule),
  },
  ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HonorverseUniverseRoutingModule { }
