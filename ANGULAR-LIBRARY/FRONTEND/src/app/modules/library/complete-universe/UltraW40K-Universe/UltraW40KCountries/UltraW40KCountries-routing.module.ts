import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UltraW40KCountriesPageComponent } from './pages/UltraW40KCountries-page/UltraW40KCountries-page.component';
import { verifyTokenGuard } from 'src/app/modules/auth/guards/verify-token.guard';

const routes: Routes = [
  {
    path: '', children: [
      {
      path: '', canActivate: [verifyTokenGuard],component: UltraW40KCountriesPageComponent
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
export class UltraW40KCountriesRoutingModule { }
