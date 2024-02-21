import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { gauntW40KBooksPageComponent } from './pages/gauntW40KBooks-page/gauntW40KBooks-page.component';
import { verifyTokenGuard } from 'src/app/modules/auth/guards/verify-token.guard';

const routes: Routes = [
  {
    path: '', children: [
      {
      path: '', canActivate: [verifyTokenGuard],component: gauntW40KBooksPageComponent
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
export class gauntW40KBooksRoutingModule { }
