import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { fundacionCharactersRoutingModule } from './fundacionCharacters-routing.module';
import { fundacionCharactersPageComponent } from './pages/fundacionCharacters-page/fundacionCharacters-page.component';
import { fundacionCharactersComponent } from './components/fundacionCharacters/fundacionCharacters.component';


@NgModule({
  declarations: [
    fundacionCharactersComponent,
    fundacionCharactersPageComponent
  ],
  imports: [
    CommonModule,
    fundacionCharactersRoutingModule,

  ]
})
export class fundacionCharactersModule { }
