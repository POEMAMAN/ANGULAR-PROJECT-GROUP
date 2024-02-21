import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { gauntW40KCharactersPageComponent } from './pages/gauntW40KCharacters-page/gauntW40KCharacters-page.component';
import { verifyTokenGuard } from 'src/app/modules/auth/guards/verify-token.guard';

const routes: Routes = [
  {
    path: '', children: [
      {
      path: '', canActivate: [verifyTokenGuard],component: gauntW40KCharactersPageComponent
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
export class gauntW40KCharactersRoutingModule { }
