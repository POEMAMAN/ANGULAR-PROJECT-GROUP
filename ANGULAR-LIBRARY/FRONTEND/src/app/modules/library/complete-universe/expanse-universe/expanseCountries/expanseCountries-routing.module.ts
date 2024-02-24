import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { expanseCountriesPageComponent } from './pages/expanseCountries-page/expanseCountries-page.component';
import { verifyTokenGuard } from 'src/app/modules/auth/guards/verify-token.guard';

const routes: Routes = [
  {
    path: '', children: [
      {
      path: '', canActivate: [verifyTokenGuard],component: expanseCountriesPageComponent
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
export class expanseCountriesRoutingModule { }
