import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { verifyTokenGuard } from 'src/app/modules/auth/guards/verify-token.guard';
import { OldManWarUniverseComponent } from './old-man-war-universe.component';

const routes: Routes = [
  {
    path: '', children: [
  {
    path: '',canActivate: [verifyTokenGuard], component: OldManWarUniverseComponent
  },
  {
    path: 'books', canActivate: [verifyTokenGuard],loadChildren: () => import('../old-man-war-universe/oldManWarBooks/oldManWarBooks.module').then(m => m.oldManWarBooksModule),
  },
  {
    path: 'characters', canActivate: [verifyTokenGuard],loadChildren: () => import('../old-man-war-universe/oldManWarCharacters/oldManWarCharacters.module').then(m => m.oldManWarCharactersModule),
  },
  {
    path: 'countries', canActivate: [verifyTokenGuard],loadChildren: () => import('../old-man-war-universe/oldManWarCountries/oldManWarCountries.module').then(m => m.oldManWarCountriesModule),
  },
  {
    path: 'planets', canActivate: [verifyTokenGuard],loadChildren: () => import('../old-man-war-universe/oldManWarPlanets/oldManWarPlanets.module').then(m => m.oldManWarPlanetsModule),
  },
  ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OldManWarUniverseRoutingModule { }
