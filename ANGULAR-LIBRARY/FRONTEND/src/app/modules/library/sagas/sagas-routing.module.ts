import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SagasPageComponent } from './pages/sagas-page/sagas-page.component';
import { verifyTokenGuard } from '../../auth/guards/verify-token.guard';

const routes: Routes = [
  {
    path: '', children: [
      {
      path: '', component: SagasPageComponent
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
export class SagasRoutingModule { }
