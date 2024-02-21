import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { duneCharactersRoutingModule } from './duneCharacters-routing.module';
import { duneCharactersPageComponent } from './pages/duneCharacters-page/duneCharacters-page.component';
import { duneCharactersComponent } from './components/duneCharacters/duneCharacters.component';


@NgModule({
  declarations: [
    duneCharactersComponent,
    duneCharactersPageComponent
  ],
  imports: [
    CommonModule,
    duneCharactersRoutingModule,

  ]
})
export class duneCharactersModule { }
