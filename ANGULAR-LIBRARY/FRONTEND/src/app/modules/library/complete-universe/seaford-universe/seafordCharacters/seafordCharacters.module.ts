import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { seafordCharactersRoutingModule } from './seafordCharacters-routing.module';
import { seafordCharactersPageComponent } from './pages/seafordCharacters-page/seafordCharacters-page.component';
import { seafordCharactersComponent } from './components/seafordCharacters/seafordCharacters.component';


@NgModule({
  declarations: [
    seafordCharactersComponent,
    seafordCharactersPageComponent
  ],
  imports: [
    CommonModule,
    seafordCharactersRoutingModule,

  ]
})
export class seafordCharactersModule { }

