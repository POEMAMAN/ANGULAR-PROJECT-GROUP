import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { oldManWarCharactersRoutingModule } from './oldManWarCharacters-routing.module';
import { oldManWarCharactersPageComponent } from './pages/oldManWarCharacters-page/oldManWarCharacters-page.component';
import { oldManWarCharactersComponent } from './components/oldManWarCharacters/oldManWarCharacters.component';


@NgModule({
  declarations: [
    oldManWarCharactersComponent,
    oldManWarCharactersPageComponent
  ],
  imports: [
    CommonModule,
    oldManWarCharactersRoutingModule,

  ]
})
export class oldManWarCharactersModule { }
