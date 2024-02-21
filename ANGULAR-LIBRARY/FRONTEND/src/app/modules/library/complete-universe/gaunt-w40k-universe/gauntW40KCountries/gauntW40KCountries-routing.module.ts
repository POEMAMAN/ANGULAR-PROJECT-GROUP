import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { gauntW40KCountriesPageComponent } from './pages/gauntW40KCountries-page/gauntW40KCountries-page.component';
import { verifyTokenGuard } from 'src/app/modules/auth/guards/verify-token.guard';

const routes: Routes = [
  {
    path: '', children: [
      {
      path: '', canActivate: [verifyTokenGuard],component: gauntW40KCountriesPageComponent
      },
      {
        path: '**', redirectTo: '', pathMatch: 'full'
      }
  ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class gauntW40KCountriesRoutingModule { }
