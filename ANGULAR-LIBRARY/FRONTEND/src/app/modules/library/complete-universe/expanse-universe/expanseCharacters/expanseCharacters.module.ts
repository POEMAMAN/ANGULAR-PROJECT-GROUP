import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { expanseCharactersRoutingModule } from './expanseCharacters-routing.module';
import { expanseCharactersPageComponent } from './pages/expanseCharacters-page/expanseCharacters-page.component';
import { expanseCharactersComponent } from './components/expanseCharacters/expanseCharacters.component';


@NgModule({
  declarations: [
    expanseCharactersComponent,
    expanseCharactersPageComponent
  ],
  imports: [
    CommonModule,
    expanseCharactersRoutingModule,

  ]
})
export class expanseCharactersModule { }
