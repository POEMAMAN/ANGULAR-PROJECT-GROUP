import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { forEverWarCharactersRoutingModule } from './forEverWarCharacters-routing.module';
import { forEverWarCharactersPageComponent } from './pages/forEverWarCharacters-page/forEverWarCharacters-page.component';
import { forEverWarCharactersComponent } from './components/forEverWarCharacters/forEverWarCharacters.component';


@NgModule({
  declarations: [
    forEverWarCharactersComponent,
    forEverWarCharactersPageComponent
  ],
  imports: [
    CommonModule,
    forEverWarCharactersRoutingModule,

  ]
})
export class forEverWarCharactersModule { }
