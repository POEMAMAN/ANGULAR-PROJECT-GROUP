import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { gauntW40KPlanetsPageComponent } from './pages/gauntW40KPlanets-page/gauntW40KPlanets-page.component';
import { verifyTokenGuard } from 'src/app/modules/auth/guards/verify-token.guard';

const routes: Routes = [
  {
    path: '', children: [
      {
      path: '', canActivate: [verifyTokenGuard],component: gauntW40KPlanetsPageComponent
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
export class gauntW40KPlanetsRoutingModule { }
