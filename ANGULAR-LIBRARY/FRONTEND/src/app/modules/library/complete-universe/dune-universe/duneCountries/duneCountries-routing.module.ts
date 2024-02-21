import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { duneCountriesPageComponent } from './pages/duneCountries-page/duneCountries-page.component';
import { verifyTokenGuard } from 'src/app/modules/auth/guards/verify-token.guard';

const routes: Routes = [
  {
    path: '', children: [
      {
      path: '', canActivate: [verifyTokenGuard],component: duneCountriesPageComponent
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
export class duneCountriesRoutingModule { }
