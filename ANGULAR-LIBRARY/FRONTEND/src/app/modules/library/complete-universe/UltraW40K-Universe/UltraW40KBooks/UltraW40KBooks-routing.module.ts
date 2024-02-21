import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UltraW40KBooksPageComponent } from './pages/UltraW40KBooks-page/UltraW40KBooks-page.component';
import { verifyTokenGuard } from 'src/app/modules/auth/guards/verify-token.guard';

const routes: Routes = [
  {
    path: '', children: [
      {
      path: '', canActivate: [verifyTokenGuard],component: UltraW40KBooksPageComponent
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
export class UltraW40KBooksRoutingModule { }
