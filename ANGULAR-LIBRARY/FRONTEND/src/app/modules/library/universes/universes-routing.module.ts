import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UniversesPageComponent } from './pages/universes-page/universes-page.component';

const routes: Routes = [
  {
    path: '', children: [
      {
      path: 'list', component: UniversesPageComponent
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
export class UniversesRoutingModule { }
