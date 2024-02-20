import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AwardsPageComponent } from './pages/awards-page/awards-page.component';
import { verifyTokenGuard } from '../../auth/guards/verify-token.guard';

const routes: Routes = [
  {
    path: '', children: [
      {
      path: 'list', component: AwardsPageComponent
      },
      {
        path: '**', redirectTo: 'list', pathMatch: 'full'
      }
  ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AwardsRoutingModule { }
