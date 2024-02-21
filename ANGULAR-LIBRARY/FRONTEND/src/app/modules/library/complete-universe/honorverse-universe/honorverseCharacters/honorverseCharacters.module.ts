import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { honorverseCharactersRoutingModule } from './honorverseCharacters-routing.module';
import { honorverseCharactersPageComponent } from './pages/honorverseCharacters-page/honorverseCharacters-page.component';
import { honorverseCharactersComponent } from './components/honorverseCharacters/honorverseCharacters.component';


@NgModule({
  declarations: [
    honorverseCharactersComponent,
    honorverseCharactersPageComponent
  ],
  imports: [
    CommonModule,
    honorverseCharactersRoutingModule,

  ]
})
export class honorverseCharactersModule { }
