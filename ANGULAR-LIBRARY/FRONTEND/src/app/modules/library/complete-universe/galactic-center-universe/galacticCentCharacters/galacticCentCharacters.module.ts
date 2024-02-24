import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { galacticCentCharactersRoutingModule } from './galacticCentCharacters-routing.module';
import { galacticCentCharactersPageComponent } from './pages/galacticCentCharacters-page/galacticCentCharacters-page.component';
import { galacticCentCharactersComponent } from './components/galacticCentCharacters/galacticCentCharacters.component';


@NgModule({
  declarations: [
    galacticCentCharactersComponent,
    galacticCentCharactersPageComponent
  ],
  imports: [
    CommonModule,
    galacticCentCharactersRoutingModule,

  ]
})
export class galacticCentCharactersModule { }
