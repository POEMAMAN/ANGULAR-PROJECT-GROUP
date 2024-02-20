import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SagasPageComponent } from './pages/sagas-page/sagas-page.component';

const routes: Routes = [
  {
    path: '', children: [
      {
      path: 'list', component: SagasPageComponent
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
export class SagasRoutingModule { }
