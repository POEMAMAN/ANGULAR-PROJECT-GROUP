import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { gauntW40KCharactersRoutingModule } from './gauntW40KCharacters-routing.module';
import { gauntW40KCharactersPageComponent } from './pages/gauntW40KCharacters-page/gauntW40KCharacters-page.component';
import { gauntW40KCharactersComponent } from './components/gauntW40KCharacters/gauntW40KCharacters.component';


@NgModule({
  declarations: [
    gauntW40KCharactersComponent,
    gauntW40KCharactersPageComponent
  ],
  imports: [
    CommonModule,
    gauntW40KCharactersRoutingModule,

  ]
})
export class gauntW40KCharactersModule { }
