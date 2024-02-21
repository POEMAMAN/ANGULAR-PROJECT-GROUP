import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UpliftCharactersRoutingModule } from './upliftCharacters-routing.module';
import { UpliftCharactersPageComponent } from './pages/upliftCharacters-page/upliftCharacters-page.component';
import { UpliftCharactersComponent } from './components/upliftCharacters/upliftCharacters.component';


@NgModule({
  declarations: [
    UpliftCharactersComponent,
    UpliftCharactersPageComponent
  ],
  imports: [
    CommonModule,
    UpliftCharactersRoutingModule,

  ]
})
export class UpliftCharactersModule { }
