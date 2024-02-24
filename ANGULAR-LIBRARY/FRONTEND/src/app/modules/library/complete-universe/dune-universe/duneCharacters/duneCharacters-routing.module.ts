import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { duneCharactersPageComponent } from './pages/duneCharacters-page/duneCharacters-page.component';
import { verifyTokenGuard } from 'src/app/modules/auth/guards/verify-token.guard';

const routes: Routes = [
  {
    path: '', children: [
      {
      path: '', canActivate: [verifyTokenGuard],component: duneCharactersPageComponent
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
export class duneCharactersRoutingModule { }
