import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorsPageComponent } from './pages/authors-page/authors-page.component';
import { verifyTokenGuard } from '../../auth/guards/verify-token.guard';

const routes: Routes = [
  {
    path: '', children: [
      {
      path: 'list', component: AuthorsPageComponent
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
export class AuthorsRoutingModule { }
