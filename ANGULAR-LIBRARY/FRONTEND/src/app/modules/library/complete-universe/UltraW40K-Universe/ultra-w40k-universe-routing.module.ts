import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UltraW40KBooksComponent } from './UltraW40KBooks/components/UltraW40KBooks/UltraW40KBooks.component';
import { verifyTokenGuard } from 'src/app/modules/auth/guards/verify-token.guard';
import { UltraW40KUniverseComponent } from './ultra-w40k-universe.component';

const routes: Routes = [
  {
    path: '', children: [
  {
    path: '',canActivate: [verifyTokenGuard], component: UltraW40KUniverseComponent
  },
  {
    path: 'books', canActivate: [verifyTokenGuard],loadChildren: () => import('../UltraW40K-Universe/UltraW40KBooks/UltraW40KBooks.module').then(m => m.UltraW40KBooksModule),
  },
  {
    path: 'characters', canActivate: [verifyTokenGuard],loadChildren: () => import('../UltraW40K-Universe/UltraW40KCharacters/UltraW40KCharacters.module').then(m => m.UltraW40KCharactersModule),
  },
  {
    path: 'countries', canActivate: [verifyTokenGuard],loadChildren: () => import('../UltraW40K-Universe/UltraW40KCountries/UltraW40KCountries.module').then(m => m.UltraW40KCountriesModule),
  },
  {
    path: 'planets', canActivate: [verifyTokenGuard],loadChildren: () => import('../UltraW40K-Universe/UltraW40KPlanets/UltraW40KPlanets.module').then(m => m.UltraW40KPlanetsModule),
  },
  ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UltraW40KUniverseRoutingModule { }
