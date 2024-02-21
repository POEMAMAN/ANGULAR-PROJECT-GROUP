import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { expanseCharactersPageComponent } from './pages/expanseCharacters-page/expanseCharacters-page.component';
import { verifyTokenGuard } from 'src/app/modules/auth/guards/verify-token.guard';

const routes: Routes = [
  {
    path: '', children: [
      {
      path: '', canActivate: [verifyTokenGuard],component: expanseCharactersPageComponent
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
export class expanseCharactersRoutingModule { }
