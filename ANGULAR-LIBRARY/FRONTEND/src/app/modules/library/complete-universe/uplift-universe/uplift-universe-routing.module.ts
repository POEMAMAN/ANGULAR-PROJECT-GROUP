import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpliftUniverseComponent } from './uplift-universe.component';
import { verifyTokenGuard } from 'src/app/modules/auth/guards/verify-token.guard';

const routes: Routes = [
  {
    path: '', children: [
  {
    path: '',canActivate: [verifyTokenGuard], component: UpliftUniverseComponent
  },
  {
    path: 'books', canActivate: [verifyTokenGuard],loadChildren: () => import('../uplift-universe/upliftBooks/upliftBooks.module').then(m => m.UpliftBooksModule),
  },
  {
    path: 'characters', canActivate: [verifyTokenGuard],loadChildren: () => import('../uplift-universe/upliftCharacters/upliftCharacters.module').then(m => m.UpliftCharactersModule),
  },
  {
    path: 'countries', canActivate: [verifyTokenGuard],loadChildren: () => import('../uplift-universe/upliftCountries/upliftCountries.module').then(m => m.UpliftCountriesModule),
  },
  {
    path: 'planets', canActivate: [verifyTokenGuard],loadChildren: () => import('../uplift-universe/upliftPlanets/upliftPlanets.module').then(m => m.UpliftPlanetsModule),
  },
  ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UpliftUniverseRoutingModule { }
