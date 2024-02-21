import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UltraW40KCharactersRoutingModule } from './UltraW40KCharacters-routing.module';
import { UltraW40KCharactersPageComponent } from './pages/UltraW40KCharacters-page/UltraW40KCharacters-page.component';
import { UltraW40KCharactersComponent } from './components/UltraW40KCharacters/UltraW40KCharacters.component';


@NgModule({
  declarations: [
    UltraW40KCharactersComponent,
    UltraW40KCharactersPageComponent
  ],
  imports: [
    CommonModule,
    UltraW40KCharactersRoutingModule,

  ]
})
export class UltraW40KCharactersModule { }
