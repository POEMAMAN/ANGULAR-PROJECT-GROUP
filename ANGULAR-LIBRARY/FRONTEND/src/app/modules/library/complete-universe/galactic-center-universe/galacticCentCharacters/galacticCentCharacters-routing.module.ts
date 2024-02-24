import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { galacticCentCharactersPageComponent } from './pages/galacticCentCharacters-page/galacticCentCharacters-page.component';
import { verifyTokenGuard } from 'src/app/modules/auth/guards/verify-token.guard';

const routes: Routes = [
  {
    path: '', children: [
      {
      path: '', canActivate: [verifyTokenGuard],component: galacticCentCharactersPageComponent
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
export class galacticCentCharactersRoutingModule { }
